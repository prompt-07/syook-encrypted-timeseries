require("dotenv").config();
const {fetchEncryptedString,
    validateIncomingData} = require('./utils/helpers')
const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:3000');
console.log("started")

ws.on('open', function open() {
    console.log("inside em")
  setInterval(function(){   
      let data = fetchEncryptedString()
      console.log("sending-data-from-emitter : "+data) 
    ws.send(
        data
    );
  }, 10000)

});