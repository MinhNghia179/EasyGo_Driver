import { IAddress, IShiftDetails } from '../../interfaces/home-interface';

export interface IHomeStore {
  AddressVisitedRecently: IAddress[];
  currentLocation: IAddress;
  shiftDetails: IShiftDetails;
}

const initialShiftDetails: IShiftDetails = {
  pickUp: {
    shortAddress: '68 cầu giấy',
    fullAddress: '68 cầu giấy, hà nội, việt nam',
    location: {
      latitude: 21.032517932105208,
      longitude: 105.80163737860909,
    },
  },
  dropOff: {
    shortAddress: 'giảng võ, ba đình',
    fullAddress: 'giảng võ, ba đình, hà nội, việt nam',
    location: {
      latitude: 21.029520105495486,
      longitude: 105.81986149348924,
    },
  },
  totalPrice: 30,
  notes:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
};

const initialState: IHomeStore = {
  AddressVisitedRecently: [],
  currentLocation: null,
  shiftDetails: initialShiftDetails,
};

const homeStore = {
  state: initialState,
  reducers: {},
  effects: dispatch => ({}),
};

export default homeStore;
