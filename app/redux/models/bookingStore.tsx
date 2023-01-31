import apiClient from '../../services/api-client';

export interface IBookingStore {
  newBookingData: any[];
  trackBookingId: string;
}

const initialState: IBookingStore = {
  newBookingData: [],
  trackBookingId: '',
};

const bookingStore = {
  state: initialState,
  reducers: {
    setNewBookingData: (state: IBookingStore, payload: any[]) => ({
      ...state,
      newBookingData: payload,
    }),
    setTrackBookingId: (state: IBookingStore, payload: string) => ({
      ...state,
      trackBookingId: payload,
    }),
  },
  effects: dispatch => ({
    async doAcceptBooking(payload: { bookingId: string }) {
      try {
        return await apiClient.post(`/booking/acceptBooking`, payload);
      } catch (error) {
        throw error;
      }
    },
    async doFinishBooking(payload: { bookingId: string }) {
      try {
        return await apiClient.post(`/booking/finishBooking`, payload);
      } catch (error) {
        throw error;
      }
    },
  }),
};

export default bookingStore;
