import React, { useState } from 'react';
import { View } from 'react-native';
import { Switch } from 'react-native-elements';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import LinkButton from '../../components/Button/LinkButton';
import PrimaryButton from '../../components/Button/PrimaryButton';
import { ActionModal } from '../../components/Modal';
import { Text } from '../../components/Text';
import { SafeAreaContainer } from '../../components/View';
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

  const [stateUser, setStateUser] = useState<boolean>(false);

  const { currentLocation } = useSelector((state: IRootState) => ({
    currentLocation: state.authStore.currentLocation,
  }));

  const initialRegion = {
    latitude: currentLocation?.location?.latitude || 21.030813822253087,
    longitude: currentLocation?.location?.longitude || 105.7994291596386,
    latitudeDelta: latDelta,
    longitudeDelta: longDelta,
  };

  const allowToEnableLocation = async () => {
    const isGranted = await requestLocationPermission();
    if (isGranted) {
      const response = await currentPosition();
      if (response) {
        const address = await getCurrentLocationByCoordinates(response);
        dispatch.authStore.setCurrentLocation(address);
      }
    }
  };

  const doNotAllow = () => {};

  return (
    <SafeAreaContainer
      title="Offline"
      leftIconName="back"
      stickyTop={<StickyTopSection isOnline={stateUser} />}
      stickyBottom={<StickyBottomSection />}
      right={
        <Switch
          value={stateUser}
          onValueChange={setStateUser}
          color={Colors.Orange500}
        />
      }
      contentType="scrollView">
      <View style={[styles.flex_1]}>
        <MapView
          initialRegion={initialRegion}
          zoomEnabled
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
          This app requires that location services are turned on your device and
          for this app. You must enable them in Settings before using this app
        </Text>
        <View style={[styles.flex_col, styles.alg_center, styles.jus_between]}>
          <PrimaryButton
            style={[styles.mv_medium]}
            onPress={allowToEnableLocation}>
            Allow only while using the app
          </PrimaryButton>
          <LinkButton onPress={doNotAllow}>Don't allow this app</LinkButton>
        </View>
      </ActionModal>
    </SafeAreaContainer>
  );
};

export default HomeDetailScreen;
