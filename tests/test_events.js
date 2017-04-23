const events = require('events');
const myEventEmitter = new events.EventEmitter();

let ringBell = function ringBell() {

    console.log('ring ring ring');

};

myEventEmitter.on('doorOpen', ringBell);

myEventEmitter.emit('doorOpen');