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
        title: 'Lỗi!',
        textBody: 'Rất tiếc, đã xảy ra lỗi! Vui lòng thử lại.',
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
        title: 'Hoan hô!',
        textBody:
          'Bạn đã nhận được một đơn đặt hàng xe. Hãy cùng nhau khám phá',
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
      title="Trang chủ"
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

      <ActionModal isVisible={!currentLocation} title="Enable your location">
        <Text type="footnote">
          Ứng dụng này yêu cầu dịch vụ vị trí được bật trên thiết bị của bạn và
          cho ứng dụng này. Bạn phải bật chúng trong Cài đặt trước khi sử dụng
          ứng dụng này
        </Text>
        <View style={[styles.flex_col, styles.alg_center, styles.jus_between]}>
          <PrimaryButton
            disabled={isLoading}
            color={Colors.Orange500}
            style={[styles.mv_medium]}
            onPress={allowToEnableLocation}>
            Cho phép khi sử dụng ứng dụng
          </PrimaryButton>
          <LinkButton onPress={doNotAllow}>
            Không cho phép ứng dụng này
          </LinkButton>
        </View>
      </ActionModal>
    </SafeAreaContainer>
  );
};

export default HomeDetailScreen;
