import { connect } from 'socket.io-client';
import { SOCKET_API_URL } from '../variables/app-config';

export const Socket = (userId: string) => {
  const socket = connect(SOCKET_API_URL, {
    transports: ['websocket'],
  });
  console.log('Start connecting...');
  socket.on('connect', function () {
    console.log('Client has connected to the server');
    socket.emit('auth', userId);
  });
  socket.on('disconnect', function () {
    console.log('The client has disconnected!');
  });
  return socket;
};
