import { connect } from 'socket.io-client';
import { SocketEvent } from '../constants/constant';
import { SOCKET_API_URL } from '../variables/app-config';

export const Socket = (userId: string) => {
  const socket = connect(SOCKET_API_URL, {
    transports: ['websocket'],
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
