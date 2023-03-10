import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import { Switch } from 'react-native-elements';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import LinkButton from '../../components/Button/LinkButton';
import PrimaryButton from '../../components/Button/PrimaryButton';
import { ActionModal } from '../../components/Modal';
import { Text } from '../../components/Text';
import { SafeAreaContainer } from '../../components/View';
import { SocketEvent } from '../../constants/constant';
import { IRootDispatch, IRootState } from '../../redux/root-store';
import {
  currentPosition,
  requestLocationPermission,
} from '../../services/geolocation-service';
import { getCurrentLocationByCoordinates } from '../../services/google-map-service';
import { Colors } from '../../styles/colors';
import IconSizes from '../../styles/icon-size';
import styles from '../../styles/style-sheet';
import StickyBottomSection from './components/StickyBottomSection';
import StickyTopSection from './components/StickyTopSection';

const latDelta = 0.025;
const longDelta = 0.025;

const HomeDetailScreen = () => {
  const dispatch = useDispatch<IRootDispatch>();

  const { currentLocation, socket, activeStatus, newBookingData } = useSelector(
    (state: IRootState) => ({
      currentLocation: state.authStore.currentLocation,
      socket: state.authStore.socket,
      activeStatus: state.authStore.activeStatus,
      newBookingData: state.bookingStore.newBookingData,
    }),
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const initialRegion = {
    latitude: currentLocation?.location?.latitude || 21.030813822253087,
    longitude: currentLocation?.location?.longitude || 105.7994291596386,
    latitudeDelta: latDelta,
    longitudeDelta: longDelta,
  };

  const allowToEnableLocation = async () => {
    setIsLoading(true);
    try {
      const isGranted = await requestLocationPermission();
      if (isGranted) {
        const response = await currentPosition();
        if (response) {
          const address = await getCurrentLocationByCoordinates(response);
          dispatch.authStore.setCurrentLocation(address);
        }
      }
    } catch (error) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'L???i!',
        textBody: 'R???t ti???c, ???? x???y ra l???i! Vui l??ng th??? l???i.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleTakeBooking = (
    newBookingData: any[],
    callBack: (data: any[]) => void,
  ) => {
    socket?.on(SocketEvent.SEND_BOOKING, data => {
      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Hoan h??!',
        textBody:
          'B???n ???? nh???n ???????c m???t ????n ?????t h??ng xe. H??y c??ng nhau kh??m ph??',
      });
      callBack([...newBookingData, data]);
    });
  };

  const handleChangeActiveStatus = () => {
    dispatch.authStore.setActiveStatus(!activeStatus);
  };

  const doNotAllow = () => {};

  useEffect(() => {
    handleTakeBooking(newBookingData, dispatch.bookingStore.setNewBookingData);
  }, [socket]);

  return (
    <SafeAreaContainer
      title="Trang ch???"
      leftIconName="back"
      stickyTop={<StickyTopSection activeStatus={activeStatus} />}
      stickyBottom={<StickyBottomSection newBookingData={newBookingData} />}
      right={
        <Switch
          value={activeStatus}
          onValueChange={handleChangeActiveStatus}
          color={Colors.Orange500}
        />
      }
      contentType="scrollView">
      <View style={[styles.flex_1]}>
        <MapView
          initialRegion={initialRegion}
          zoomEnabled
          rotateEnabled
          pitchEnabled
          showsMyLocationButton
          showsUserLocation
          zoomControlEnabled
          style={[styles.flex_1]}>
          {currentLocation && currentLocation?.location && (
            <Marker
              coordinate={currentLocation?.location}
              title={currentLocation.shortAddress}
              description={currentLocation.fullAddress}>
              <Icon
                name="my-location"
                color={Colors.Blue300}
                size={IconSizes.x_small}
              />
            </Marker>
          )}
        </MapView>
      </View>

      <ActionModal
        isVisible={!currentLocation}
        title="B???t v??? tr?? hi???n t???i c???a b???n">
        <Text type="footnote">
          ???ng d???ng n??y y??u c???u d???ch v??? v??? tr?? ???????c b???t tr??n thi???t b??? c???a b???n v??
          cho ???ng d???ng n??y. B???n ph???i b???t ch??ng trong C??i ?????t tr?????c khi s??? d???ng
          ???ng d???ng n??y
        </Text>
        <View style={[styles.flex_col, styles.alg_center, styles.jus_between]}>
          <PrimaryButton
            disabled={isLoading}
            color={Colors.Orange500}
            style={[styles.mv_medium]}
            onPress={allowToEnableLocation}>
            Cho ph??p khi s??? d???ng ???ng d???ng
          </PrimaryButton>
          <LinkButton onPress={doNotAllow}>
            Kh??ng cho ph??p ???ng d???ng n??y
          </LinkButton>
        </View>
      </ActionModal>
    </SafeAreaContainer>
  );
};

export default HomeDetailScreen;
