import { IAddress } from '../../interfaces/home-interface';

export interface IHomeStore {
  AddressVisitedRecently: IAddress[];
  currentLocation: IAddress;
}

const initialState: IHomeStore = {
  AddressVisitedRecently: [],
  currentLocation: null,
};

const homeStore = {
  state: initialState,
  reducers: {},
  effects: dispatch => ({}),
};

export default homeStore;
