import { PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { ICoordinates } from '../interfaces/home-interface';

export const config = {
  enableHighAccuracy: true,
  distanceFilter: 0,
  interval: 5000,
  fastestInterval: 2000,
};

export const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const currentPosition = async () => {
  const position: Geolocation.GeoPosition = await new Promise(
    (resolve, reject) => {
      Geolocation.getCurrentPosition(resolve, reject, config);
    },
  );
  if (position) {
    const coordinates: ICoordinates = {
      latitude: position?.coords?.latitude,
      longitude: position?.coords?.longitude,
    };
    return coordinates;
  }
  return null;
};

export const watchPosition = async () => {
  const position: Geolocation.GeoPosition = await new Promise(
    (resolve, reject) => {
      Geolocation.watchPosition(resolve, reject, config);
    },
  );
  if (position) {
    const coordinates: ICoordinates = {
      latitude: position?.coords?.latitude,
      longitude: position?.coords?.longitude,
    };
    return coordinates;
  }
};
