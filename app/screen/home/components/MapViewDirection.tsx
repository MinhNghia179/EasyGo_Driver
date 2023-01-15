import React from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import styles from '../../../styles/style-sheet';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../../styles/colors';
import IconSizes from '../../../styles/icon-size';

interface IProps {
  shiftDetails: any;
}

const MapViewDirection = (props: IProps) => {
  const { shiftDetails } = props;

  const pickUpLocation = shiftDetails?.pickUp;
  const dropOffLocation = shiftDetails?.dropOff;
  const routes = shiftDetails?.directions?.map(({ coordinates }) => ({
    ...coordinates,
  }));

  return (
    <MapView
      zoomEnabled
      zoomControlEnabled
      style={[
        styles.flex_1,
        {
          minHeight: 200,
        },
      ]}>
      {pickUpLocation && pickUpLocation?.location && (
        <Marker
          coordinate={pickUpLocation?.location}
          title={pickUpLocation.shortAddress}
          description={pickUpLocation.fullAddress}>
          <Icon
            name="my-location"
            color={Colors.Blue300}
            size={IconSizes.x_small}
          />
        </Marker>
      )}
      {dropOffLocation && dropOffLocation?.location && (
        <Marker
          coordinate={dropOffLocation?.location}
          title={dropOffLocation.shortAddress}
          description={dropOffLocation.fullAddress}>
          <Icon
            name="my-location"
            color={Colors.Blue300}
            size={IconSizes.x_small}
          />
        </Marker>
      )}
      {pickUpLocation?.location && dropOffLocation?.location && (
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
