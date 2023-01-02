import { connect } from 'socket.io-client';

export const Socket = (userId: string) => {
  const socket = connect('http://13.127.11.84:8086', {
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
