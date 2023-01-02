import { IUser } from '../../interfaces/auth-interface';
import { IAddress } from '../../interfaces/home-interface';
import apiClient from '../../services/api-client';
import { Socket } from '../../services/socket-service';

export interface IAuthStore {
  portalUser: IUser;
  currentLocation: IAddress;
  socket: any;
}

const initialState: IAuthStore = {
  portalUser: null,
  currentLocation: null,
  socket: null,
};

const authStore = {
  state: initialState,
  reducers: {
    setPortalUser: (state: IAuthStore, payload) => ({
      ...state,
      portalUser: payload,
    }),
    setCurrentLocation: (state: IAuthStore, payload: IAddress) => ({
      ...state,
      currentLocation: payload,
    }),
    setSocket: (state: IAuthStore, payload: any) => ({
      ...state,
      socket: payload,
    }),
  },
  effects: dispatch => ({
    async doSignIn(payload: { email: string; password: string }) {
      try {
        const response = await apiClient.post(`/user/login`, payload);
        if (response.status === 200) {
          const sessionId = response.data.result.sessionId;
          dispatch.authStore.setSocket(Socket(response.data.result.info.id));
          apiClient.setSession(sessionId);
        }
        dispatch.authStore.setPortalUser(response.data.result.info);
      } catch (error) {
        throw error;
      }
    },
    async doSignOut() {
      try {
        dispatch.authStore.setPortalUser(null);
      } catch (error) {
        throw error;
      }
    },
  }),
};

export default authStore;
