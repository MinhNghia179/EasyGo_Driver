import React from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import styles from '../../../styles/style-sheet';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../../styles/colors';
import IconSizes from '../../../styles/icon-size';

interface IProps {
  shiftDetails: any;
  location: any;
}

const MapViewDirection = (props: IProps) => {
  const { shiftDetails, location } = props;

  const initialRegion = {
    latitude: shiftDetails?.latStartPoint,
    longitude: shiftDetails?.lonStartPoint,
    latitudeDelta: 0.025,
    longitudeDelta: 0.025,
  };

  const pickUpLocation = {
    latitude: shiftDetails?.latStartPoint,
    longitude: shiftDetails?.lonStartPoint,
  };
  const dropOffLocation = {
    latitude: shiftDetails?.latEndPoint,
    longitude: shiftDetails?.lonEndPoint,
  };
  const routes = shiftDetails?.directions?.map(({ coordinates }) => ({
    ...coordinates,
  }));

  return (
    <MapView
      zoomEnabled
      region={initialRegion}
      zoomControlEnabled
      style={[
        styles.flex_1,
        {
          minHeight: 200,
        },
      ]}>
      {!!pickUpLocation && (
        <Marker
          coordinate={pickUpLocation}
          title="Start Location"
          description={shiftDetails?.nameStartPoint}>
          <Icon
            name="my-location"
            color={Colors.Blue300}
            size={IconSizes.x_small}
          />
        </Marker>
      )}
      {!!location && (
        <Marker coordinate={location} title="My Location">
          <Icon
            name="directions-bike"
            color={Colors.Blue300}
            size={IconSizes.x_small}
          />
        </Marker>
      )}
      {!!dropOffLocation && (
        <Marker
          coordinate={dropOffLocation}
          title="End Location"
          description={shiftDetails?.nameEndPoint}>
          <Icon
            name="my-location"
            color={Colors.Blue300}
            size={IconSizes.x_small}
          />
        </Marker>
      )}
      {!!pickUpLocation && (
        <Polyline
          coordinates={routes || []}
          strokeColor={Colors.Orange500}
          strokeWidth={3}
        />
      )}
    </MapView>
  );
};

export default MapViewDirection;
