import { connect } from 'socket.io-client';
import { SocketEvent } from '../constants/constant';
import Config from 'react-native-config';

export const Socket = (userId: string) => {
  const socket = connect(Config.SOCKET_API_URL, {
    transports: ['websocket'],
    jsonp: false,
  });

  socket.on(SocketEvent.CONNECT, function () {
    console.log('Client has connected to the server');
    socket.emit(SocketEvent.AUTH, userId);
  });

  socket.on(SocketEvent.DISCONNECT, function () {
    console.log('The client has disconnected!');
  });
  return socket;
};
