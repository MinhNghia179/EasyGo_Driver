import apiClient from '../../services/api-client';

export interface IBookingStore {
  newBookingData: any;
}

const initialState: IBookingStore = {
  newBookingData: [{}],
};

const bookingStore = {
  state: initialState,
  reducers: {
    setNewBookingData: (state: IBookingStore, payload: any) => ({
      ...state,
      newBookingData: payload,
    }),
  },
  effects: dispatch => ({
    async doAcceptBooking(payload: any) {
      try {
        const response = await apiClient.post(`/user/login`, payload);
      } catch (error) {
        throw error;
      }
    },
  }),
};

export default bookingStore;
