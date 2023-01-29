import { useRoute } from '@react-navigation/native';
import { isEmpty } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import Geolocation from 'react-native-geolocation-service';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar } from '../../components/Avatar';
import PrimaryButton from '../../components/Button/PrimaryButton';
import { Text } from '../../components/Text';
import { SafeAreaContainer } from '../../components/View';
import { HomeStackRoute, SocketEvent } from '../../constants/constant';
import navigationService from '../../navigation/navigation-service';
import { IRootDispatch, IRootState } from '../../redux/root-store';
import { config } from '../../services/geolocation-service';
import { getDirectionByCoordinates } from '../../services/google-map-service';
import { wp } from '../../services/response-screen-service';
import { Colors } from '../../styles/colors';
import styles from '../../styles/style-sheet';
import CardItem from './components/CardItem';
import MapViewDirection from './components/MapViewDirection';

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const ShiftsItemDetail = (props: IProps) => {
  const dispatch = useDispatch<IRootDispatch>();

  const { navigation } = props;
  const { socket, trackBookingId } = useSelector((state: IRootState) => ({
    socket: state.authStore.socket,
    trackBookingId: state.bookingStore.trackBookingId,
  }));
  let watchId = useRef<number | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [shiftDetails, setShiftDetails] = useState<any>(null);

  const route: any = useRoute();

  const stopLocationUpdates = async () => {
    if (watchId.current !== null) {
      Geolocation.clearWatch(watchId.current);
      watchId.current = null;
    }
  };

  const clearState = () => {
    dispatch.bookingStore.setTrackBookingId('');
    dispatch.bookingStore.setNewBookingData([]);
  };

  const getLocationUpdates = async () => {
    watchId.current = Geolocation.watchPosition(
      position => {
        socket?.emit(SocketEvent.TRACK, {
          latitude: position?.coords?.latitude,
          longitude: position?.coords?.longitude,
        });
      },
      error => {
        console.error(error);
      },
      config,
    );
  };

  const handleFinishBooking = async () => {
    setIsLoading(true);
    try {
      const response = await dispatch.bookingStore.doFinishBooking({
        bookingId: shiftDetails?.id,
      });
      if (response.status === 200) {
        Toast.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Successfully!',
          textBody: 'Successfully!. The ride is completed',
        });
        stopLocationUpdates();
        clearState();
        navigationService.navigate(HomeStackRoute.DASHBOARD, {});
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchDirectionByCoordinates = async (shiftDetails: any) => {
    setIsLoading(true);
    try {
      const payload = {
        pickUp: {
          latitude: shiftDetails?.latStartPoint,
          longitude: shiftDetails?.lonStartPoint,
        },
        dropOff: {
          latitude: shiftDetails?.latEndPoint,
          longitude: shiftDetails?.lonEndPoint,
        },
      };
      const response = await getDirectionByCoordinates(payload);
      setShiftDetails({ ...response, ...shiftDetails });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAcceptBooking = async () => {
    setIsLoading(true);
    try {
      const response = await dispatch.bookingStore.doAcceptBooking({
        bookingId: shiftDetails?.id,
      });
      if (response.status === 200) {
        dispatch.bookingStore.setTrackBookingId(shiftDetails?.id);
        Toast.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Successfully!',
          textBody: "Successfully. Let's go, customers are waiting.",
        });
        getLocationUpdates();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const shiftDetails: any = route?.params?.shiftDetails;
    if (!isEmpty(shiftDetails)) {
      fetchDirectionByCoordinates(shiftDetails);
    }
  }, [route.params]);

  return (
    <SafeAreaContainer
      leftIconName="back"
      contentType="scrollView"
      title="Shift Details"
      leftIconOnPress={() => navigation.goBack()}
      stickyBottom={
        <View style={[styles.p_medium, styles.bg_white]}>
          {trackBookingId === shiftDetails?.id && (
            <PrimaryButton
              disabled={isLoading}
              onPress={() =>
                navigationService.navigate(HomeStackRoute.WIZARD_DETAIL, {
                  shiftDetails,
                })
              }>
              See wizard details
            </PrimaryButton>
          )}
          {trackBookingId === shiftDetails?.id ? (
            <PrimaryButton
              disabled={isLoading}
              style={[styles.mt_small]}
              color={Colors.Green500}
              onPress={handleFinishBooking}>
              Finish booking
            </PrimaryButton>
          ) : (
            <PrimaryButton
              disabled={isLoading}
              style={[styles.mt_small]}
              color={Colors.Yellow500}
              onPress={handleAcceptBooking}>
              Accept booking
            </PrimaryButton>
          )}
        </View>
      }>
      <ScrollView>
        {isLoading ? (
          <>
            <Text textAlign="center">Loading shift details...</Text>
            <ActivityIndicator />
          </>
        ) : (
          <View style={[styles.p_medium, styles.flex_1]}>
            <View
              style={[
                styles.flex_row,
                styles.alg_center,
                styles.jus_between,
                styles.p_medium,
                {
                  backgroundColor: Colors.Orange500,
                },
              ]}>
              <View style={[styles.flex_row]}>
                <Avatar
                  style={[styles.rounded]}
                  imageSize={wp(35)}
                  source={{
                    uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                  }}
                  position="bottom-left"
                />
                <View style={[styles.ml_small]}>
                  <Text fontWeight="bold" type="subhead">
                    {shiftDetails?.userName}
                  </Text>
                </View>
              </View>
              <View style={[styles.flex_col, styles.alg_end]}>
                <Text fontWeight="bold" type="subhead">
                  $ {shiftDetails?.totalPrice}
                </Text>
                <Text type="caption1" color={Colors.Text.GreySecondary}>
                  {shiftDetails?.distance} km
                </Text>
              </View>
            </View>
            <View style={[styles.p_small]}>
              <CardItem label="PICK UP" value={shiftDetails?.nameStartPoint} />
              <CardItem label="DROP OFF" value={shiftDetails?.nameEndPoint} />
            </View>
            <MapViewDirection shiftDetails={shiftDetails} />
            <View style={[styles.mv_small]}>
              <CardItem label="Notes" value={shiftDetails?.notes} />
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default ShiftsItemDetail;
