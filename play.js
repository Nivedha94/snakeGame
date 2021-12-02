const net = require('net');
const connect = (() => {
  const conn = net.createConnection ({
    host: '165.227.47.243',
    port: 50541
  });

  conn.on("connect", () => {
    console.log("connection has been established");
  })

  conn.setEncoding('utf8');

  return conn;

})

console.log("Connecting...");
connect();
