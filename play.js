const { stdin } = require('process');
const client = require('./client.js');
const input = require('./input.js');

console.log("Connecting...");
client.connect();
input.setupInput();
