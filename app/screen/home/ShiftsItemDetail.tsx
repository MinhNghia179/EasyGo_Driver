import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import { Avatar } from '../../components/Avatar';
import PrimaryButton from '../../components/Button/PrimaryButton';
import { Text } from '../../components/Text';
import { SafeAreaContainer } from '../../components/View';
import { HomeStackRoute } from '../../constants/constant';
import { IShiftDetails } from '../../interfaces/home-interface';
import navigationService from '../../navigation/navigation-service';
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
  const { navigation } = props;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [shiftDetails, setShiftDetails] = useState<any>(null);

  const route: any = useRoute();

  const fetchDirectionByCoordinates = async (shiftDetails: IShiftDetails) => {
    setIsLoading(true);
    try {
      const payload = {
        pickUp: shiftDetails?.pickUp?.location,
        dropOff: shiftDetails?.dropOff?.location,
      };
      const response = await getDirectionByCoordinates(payload);
      setShiftDetails({ ...response, ...shiftDetails });
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const handleAcceptBooking = () => {};

  useEffect(() => {
    const shiftDetails: any = route.params.shiftDetails;
    fetchDirectionByCoordinates(shiftDetails);
  }, [route.params]);

  return (
    <SafeAreaContainer
      leftIconName="back"
      contentType="scrollView"
      title="Shift Details"
      leftIconOnPress={() => navigation.goBack()}
      stickyBottom={
        <View style={[styles.p_medium, styles.bg_white]}>
          <PrimaryButton
            disabled={isLoading}
            onPress={() =>
              navigationService.navigate(HomeStackRoute.WIZARD_DETAIL, {
                shiftDetails,
              })
            }>
            See wizard details
          </PrimaryButton>
          <PrimaryButton
            disabled={isLoading}
            style={[styles.mt_small]}
            color={Colors.Yellow500}
            onPress={handleAcceptBooking}>
            Accept
          </PrimaryButton>
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
                    Connie
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
              <CardItem
                label="PICK UP"
                value={shiftDetails?.pickUp?.fullAddress}
              />
              <CardItem
                label="DROP OFF"
                value={shiftDetails?.dropOff?.fullAddress}
              />
            </View>
            <MapViewDirection shiftDetails={shiftDetails} />
            <View style={[styles.mv_small]}>
              <CardItem
                label="Notes"
                value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
              />
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default ShiftsItemDetail;
