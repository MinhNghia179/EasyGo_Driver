import axios from 'axios';
import {
  IAddress,
  ICoordinates,
  IRouteInfo,
} from '../interfaces/home-interface';
import { GOOGLE_BASE_URL, GOOGLE_REST_API_KEY } from '../variables/app-config';

export const getCurrentLocationByCoordinates = async (
  payload: ICoordinates,
) => {
  try {
    const response = await axios.get(
      `${GOOGLE_BASE_URL}/Locations/${payload.latitude},${payload.longitude}?key=${GOOGLE_REST_API_KEY}`,
    );
    const addressDetails = response.data.resourceSets[0].resources[0].address;
    if (addressDetails) {
      const shortAddress = addressDetails.addressLine;
      const fullAddress = addressDetails.formattedAddress.replace(
        `${addressDetails.postalCode}`,
        '',
      );
      return {
        shortAddress,
        fullAddress,
        location: payload,
      };
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const autoSuggestLocationBySearchName = async (payload: {
  addressName: string;
  userLocation: ICoordinates;
}) => {
  const { addressName, userLocation } = payload;
  try {
    const response = await axios.get(
      `${GOOGLE_BASE_URL}/Autosuggest?query=${addressName}&userLocation=${userLocation.latitude},${userLocation.longitude}&includeEntityTypes=Address,Place&key=${GOOGLE_REST_API_KEY}`,
    );
    const addresses = response.data.resourceSets[0].resources[0].value;
    return addresses.map(
      ({ address }) =>
        ({
          shortAddress: address.addressLine,
          fullAddress: address.formattedAddress,
        } as { shortAddress: string; fullAddress: string }),
    );
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getCurrentLocationByName = async (payload: { name: string }) => {
  const { name } = payload;
  try {
    const response = await axios.get(
      `${GOOGLE_BASE_URL}/Locations?CountryRegion=VN&locality=Somewhere&addressLine=${name}&key=${GOOGLE_REST_API_KEY}`,
    );
    const resource = response.data.resourceSets[0].resources[0];
    const location = {
      latitude: resource.point.coordinates[0],
      longitude: resource.point.coordinates[1],
    };
    return {
      fullAddress: resource.name,
      shortAddress: resource.address.addressLine,
      location,
    } as IAddress;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getRoutes = async (payload: {
  pickup: ICoordinates;
  dropOff: ICoordinates;
}) => {
  const { pickup, dropOff } = payload;
  try {
    const response = await axios.get(
      `${GOOGLE_BASE_URL}/Routes?wp.0=${pickup.latitude}, ${pickup.longitude}&wp.1=${dropOff.latitude}, ${dropOff.longitude}&key=${GOOGLE_REST_API_KEY}`,
    );
    const routeInfo = response.data.resourceSets[0].resources[0];
    const { travelDistance, travelDuration, travelDurationTraffic, routeLegs } =
      routeInfo;
    const routes = routeLegs[0].itineraryItems.map(({ maneuverPoint }) => ({
      latitude: maneuverPoint.coordinates[0],
      longitude: maneuverPoint.coordinates[1],
    }));
    return {
      travelDistance,
      travelDuration,
      travelDurationTraffic,
      routes,
    } as IRouteInfo;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getDirectionByCoordinates = async (payload: {
  pickup: ICoordinates;
  dropOff: ICoordinates;
}) => {
  const { pickup, dropOff } = payload;
  try {
    const response = await axios.get(
      `${GOOGLE_BASE_URL}/Routes?wp.0=${pickup.latitude}, ${pickup.longitude}&wp.1=${dropOff.latitude}, ${dropOff.longitude}&key=${GOOGLE_REST_API_KEY}`,
    );
    const routeInfo = response.data.resourceSets[0].resources[0];
    const { routeLegs } = routeInfo;

    const directions = routeLegs[0].itineraryItems.map(
      ({ instruction, maneuverPoint, travelDuration }) => ({
        type: instruction.maneuverType,
        text: instruction.text,
        coordinates: maneuverPoint.coordinates,
        travelDuration: travelDuration,
      }),
    );

    console.log('Log', directions);

    return directions;
  } catch (error) {
    console.error(error);
    return null;
  }
};
