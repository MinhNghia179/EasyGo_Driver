const Route = {
  APP: 'App',
  HOME_STACK: 'HomeStack',
  ACCOUNT_STACK: 'AccountStack',
  LOGIN_STACK: 'LoginStack',
};

const HomeStackRoute = {
  DASHBOARD: 'Dashboard',
  NEW_REQUESTS: 'NewRequest',
  SHIFTS_ITEM_DETAIL: 'ShiftsItemDetail',
  WIZARD_DETAIL: 'WizardDetail',
};

const LoginStackRoute = {
  LOGIN: 'Login',
  FORGOT_PASSWORD: 'ForgotPassword',
};

const AccountStackRoute = {
  DASHBOARD: 'Dashboard',
};

const SocketEvent = {
  AUTH: 'auth',
  CONNECT: 'connect',
  DISCONNECT: 'disconnect',
  SEND_BOOKING: 'send_booking',
  SEND_DRIVER_INFO: 'send_driver',
  TRACK: 'track',
};

const BookingStatus = {
  CREATED: 'CREATED',
  ACCEPT: 'ACCEPT',
  REJECT: 'REJECT',
  SUCCESS: 'SUCCESS',
};

export {
  Route,
  HomeStackRoute,
  LoginStackRoute,
  AccountStackRoute,
  SocketEvent,
  BookingStatus,
};
