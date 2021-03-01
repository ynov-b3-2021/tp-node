const net = require('net');

const portNumber = process.argv[2];

const zeroPad = number => number < 10 ? '0' + number : number;

const server = net.createServer((socket) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = zeroPad(date.getMonth() + 1);
  const day = zeroPad(date.getDate());
  const hour = zeroPad(date.getHours());
  const minute = zeroPad(date.getMinutes());

  const dateString = `${year}-${month}-${day} ${hour}:${minute}`;

  socket.end(dateString + '\n');
});

server.listen(portNumber);
