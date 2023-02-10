import { useRoute } from '@react-navigation/native';
import { isEmpty, round } from 'lodash';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import Geolocation from 'react-native-geolocation-service';
import StepIndicator from 'react-native-step-indicator';
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
import {
  BookingStatus,
  BookingStep,
  HomeStackRoute,
  SocketEvent,
} from '../../constants/constant';
import navigationService from '../../navigation/navigation-service';
import { IRootDispatch, IRootState } from '../../redux/root-store';
import { config } from '../../services/geolocation-service';
import { getDirectionByCoordinates } from '../../services/google-map-service';
import { wp } from '../../services/response-screen-service';
import { Colors } from '../../styles/colors';
import styles from '../../styles/style-sheet';
import { numberWithCommas } from '../../utils/constant';
import CancelBooking from './components/CancelBooking';
import CardItem from './components/CardItem';
import DirectionIcon from './components/DirectionIcon';
import MapViewDirection from './components/MapViewDirection';
import { Card } from 'react-native-elements';

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013',
};

const ShiftsItemDetail = (props: IProps) => {
  const dispatch = useDispatch<IRootDispatch>();

  const { navigation } = props;
  const { socket, trackBookingId } = useSelector((state: IRootState) => ({
    socket: state.authStore.socket,
    trackBookingId: state.bookingStore.trackBookingId,
  }));
  let watchId = useRef<number | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [shiftDetails, setShiftDetails] = useState<any>(null);
  const [visibleCancelBookingModal, setVisibleCancelBookingModal] =
    useState<boolean>(false);
  const [reason, setReason] = useState<string>('');
  const [activeStep, setActiveStep] = useState<number>(BookingStep.CREATED);

  const route: any = useRoute();

  const labels = [
    BookingStatus.CREATED,
    BookingStatus.PROGRESS,
    BookingStatus.FINISH,
    BookingStatus.CANCEL,
  ];

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
        const coordinates = {
          latitude: position?.coords?.latitude,
          longitude: position?.coords?.longitude,
        };
        socket?.emit(SocketEvent.TRACK, {
          lat: coordinates.latitude,
          lon: coordinates.longitude,
          to: shiftDetails?.userId,
        });
      },
      error => {
        console.error(error);
      },
      config,
    );
  };

  const handleFinishBooking = async () => {
    setIsSubmitting(true);
    try {
      const response = await dispatch.bookingStore.doFinishBooking({
        bookingId: shiftDetails?.id,
      });
      if (response.status === 200) {
        setActiveStep(BookingStep.FINISH);
        Toast.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Thành công!',
          textBody: 'Cuốc xe đã hoàn thành.',
        });
        stopLocationUpdates();
      }
    } catch (error) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Lỗi!',
        textBody: 'Rất tiếc, đã xảy ra lỗi! Vui lòng thử lại.',
      });
    } finally {
      setIsSubmitting(false);
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
    setIsSubmitting(true);
    try {
      const response = await dispatch.bookingStore.doAcceptBooking({
        bookingId: shiftDetails?.id,
      });
      if (response.status === 200) {
        setActiveStep(BookingStep.PROGRESS);
        dispatch.bookingStore.setTrackBookingId(shiftDetails?.id);
        Toast.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Thành công!',
          textBody: 'Cuốc xe đã được bạn chấp nhận!',
        });
        getLocationUpdates();
      }
    } catch (error) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Lỗi!',
        textBody: 'Rất tiếc, đã xảy ra lỗi! Vui lòng thử lại.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancelBooking = (info: any) => {
    setVisibleCancelBookingModal(true);
    setActiveStep(BookingStep.CANCEL);
    setReason(info?.reason);
    Toast.show({
      type: ALERT_TYPE.WARNING,
      title: 'Cuốc đã đã được hủy bỏ bởi khách hàng.',
    });
    stopLocationUpdates();
  };

  useEffect(() => {
    const shiftDetails: any = route?.params?.shiftDetails;
    if (trackBookingId === shiftDetails?.id) {
      setActiveStep(BookingStep.PROGRESS);
    }
    if (!isEmpty(shiftDetails)) {
      fetchDirectionByCoordinates(shiftDetails);
    }
  }, [route.params]);

  useEffect(() => {
    socket?.on(SocketEvent.CANCEL_BOOKING, data => handleCancelBooking(data));
  }, [socket]);

  return (
    <SafeAreaContainer
      leftIconName="back"
      contentType="scrollView"
      title="Chi tiết đơn hàng"
      leftIconOnPress={() => navigation.goBack()}
      stickyBottom={
        <View style={[styles.p_medium, styles.bg_white]}>
          {[BookingStep.FINISH, BookingStep.CANCEL].includes(activeStep) ? (
            <PrimaryButton
              loading={isSubmitting}
              style={[styles.mt_small]}
              color={Colors.Yellow500}
              onPress={() => {
                clearState();
                navigationService.navigate(HomeStackRoute.DASHBOARD, {});
              }}>
              Quay về trang chủ
            </PrimaryButton>
          ) : (
            <>
              {activeStep === BookingStep.PROGRESS &&
                trackBookingId === shiftDetails?.id && (
                  <PrimaryButton
                    disabled={isSubmitting}
                    style={[styles.mt_small]}
                    color={Colors.Green500}
                    onPress={handleFinishBooking}>
                    Kết thúc cuốc xe
                  </PrimaryButton>
                )}
              {activeStep === BookingStep.CREATED && (
                <PrimaryButton
                  loading={isSubmitting}
                  style={[styles.mt_small]}
                  color={Colors.Yellow500}
                  onPress={handleAcceptBooking}>
                  Chấp nhận cuốc xe
                </PrimaryButton>
              )}
            </>
          )}
        </View>
      }>
      <ScrollView>
        {isLoading ? (
          <>
            <Text textAlign="center">Loading...</Text>
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
                  <Text fontWeight="bold" type="subhead" color={Colors.White}>
                    {shiftDetails?.userName}
                  </Text>
                  <View>
                    <Text type="caption2" color={Colors.White}>
                      ETA: {round(shiftDetails?.travelDuration / 60, 2)} Mins -{' '}
                      {shiftDetails?.travelDistance} km
                    </Text>
                    <Text type="caption2" color={Colors.White}>
                      Create at: {moment(shiftDetails?.createdAt).format('lll')}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.flex_col, styles.alg_end]}>
                <Text fontWeight="bold" type="caption2" color={Colors.White}>
                  $ {numberWithCommas(shiftDetails?.totalPrice)} (VNĐ)
                </Text>
              </View>
            </View>

            <View
              style={[
                styles.flex_row,
                styles.rounded_small,
                styles.p_small,
                {
                  backgroundColor: Colors.Green100,
                },
              ]}>
              <Text type="caption1" color={Colors.Text.GreySecondary}>
                Giá dịch vụ đã được tính dựa trên quãng đường di chuyển
              </Text>
            </View>

            <View
              style={[
                styles.mv_small,
                styles.b_small,
                styles.rounded_small,
                styles.p_small,
                {
                  borderColor: Colors.Grey200,
                },
              ]}>
              <StepIndicator
                customStyles={customStyles}
                currentPosition={activeStep}
                labels={labels}
                stepCount={labels.length}
              />
            </View>

            <CardItem
              label="Điểm xuất phát:"
              value={shiftDetails?.nameStartPoint}
            />
            <CardItem label="Điểm đến:" value={shiftDetails?.nameEndPoint} />
            <CardItem label="Ghi chú:" value={shiftDetails?.notes} />
            <View style={[styles.rounded, {}]}>
              <MapViewDirection shiftDetails={shiftDetails} />
            </View>
            <View style={[styles.mv_small]}>
              {shiftDetails?.directions?.length ? (
                shiftDetails?.directions?.map((one, index) => (
                  <View
                    key={index}
                    style={[
                      styles.flex_row,
                      styles.alg_center,
                      styles.p_small,
                      {
                        backgroundColor:
                          index % 2 ? Colors.Grey400 : Colors.Grey200,
                      },
                    ]}>
                    <DirectionIcon
                      direction={one.type}
                      color={index % 2 ? Colors.White : Colors.Black}
                    />
                    <View
                      style={[
                        styles.flex_1,
                        {
                          borderColor: Colors.Black,
                        },
                      ]}>
                      <Text
                        fontWeight="bold"
                        type="footnote"
                        numberOfLines={1}
                        color={index % 2 ? Colors.White : Colors.Black}>
                        {one.text}
                      </Text>
                      <View
                        style={[
                          styles.mt_small,
                          styles.flex_row,
                          styles.jus_start,
                        ]}>
                        <Text type="caption2" fontWeight="bold">
                          {one.distance} km
                        </Text>
                        <View style={[styles.ml_large]}>
                          <Text type="caption2" fontWeight="bold">
                            {round(one.travelDuration / 60, 2)} minutes{' '}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                ))
              ) : (
                <Text>Không có chỉ dẫn</Text>
              )}
            </View>
          </View>
        )}
      </ScrollView>

      <CancelBooking
        visible={visibleCancelBookingModal}
        reason={reason}
        shiftDetails={shiftDetails}
        onClose={() => setVisibleCancelBookingModal(false)}
      />
    </SafeAreaContainer>
  );
};

export default ShiftsItemDetail;
