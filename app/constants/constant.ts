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
  CHAT: 'chat',
  CANCEL_BOOKING: 'cancel_booking',
};

enum BookingStatus {
  CREATED = 'CREATED',
  PROGRESS = 'PROGRESS',
  FINISH = 'FINISH',
  CANCEL = 'CANCEL',
}

const BookingStep = {
  [BookingStatus.CREATED]: 0,
  [BookingStatus.PROGRESS]: 1,
  [BookingStatus.FINISH]: 2,
  [BookingStatus.CANCEL]: 3,
};

export {
  Route,
  HomeStackRoute,
  LoginStackRoute,
  AccountStackRoute,
  SocketEvent,
  BookingStatus,
  BookingStep,
};
