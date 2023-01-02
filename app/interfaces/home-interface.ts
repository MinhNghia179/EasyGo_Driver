export interface ICoordinates {
  latitude: number;
  longitude: number;
}

export interface IAddress {
  shortAddress?: string;
  fullAddress?: string;
  location?: ICoordinates;
}

export interface IRouteInfo {
  travelDistance: number;
  travelDuration: number;
  travelDurationTraffic: number;
  routes: ICoordinates[];
}

export interface IShiftDetails {
  pickUp: IAddress;
  dropOff: IAddress;
  totalPrice: number;
  notes: string;
}
