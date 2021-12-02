const net = require('net');
const connect = (() => {
  const conn = net.createConnection ({
    host: '165.227.47.243',
    port: 50541
  });

  conn.on("connect", () => {
    console.log("connection has been established");
    conn.write("Name: NTS");
    conn.write("Say: Hello");
  })
  
  // conn.on('connect', () => {
  //   conn.write("Move: left");
  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, 2000);

  //   setTimeout(() => {
  //     conn.write("Move: right");
  //   }, 3000);

  //   setTimeout(() => {
  //     conn.write("Move: down");
  //   }, 4000);
  
  conn.setEncoding('utf8');

  return conn;
  // })

})

module.exports = { connect };