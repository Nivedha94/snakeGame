const net = require('net');
const { IP, PORT } = require ('./constants.js');
const connect = (() => {
  const conn = net.createConnection ({
    host: IP, 
    port: PORT
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