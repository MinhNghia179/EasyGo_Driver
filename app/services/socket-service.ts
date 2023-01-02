import { connect } from 'socket.io-client';

export default function Socket(session) {
  const socket = connect('http://157.245.60.55:8080', {
    transports: ['websocket'],
  });
  console.log('Start connecting...');
  socket.on('connect', function () {
    console.log('Client has connected to the server');
    socket.emit('auth', session);
  });
  socket.on('disconnect', function () {
    console.log('The client has disconnected!');
  });
  return socket;
}
