'use strict';

const assert = require('assert');

const WebSocket = require('ws');

describe('ChatBot - Websocket', () => {

    it('Make very first echo to chatbot', (done) => {
        const socket = new WebSocket('ws://localhost:5555', {
        origin: 'http://localhost:7777',
        protocolVersion: 13
        });
        const str = 'Greetings, friend! Type <tt>help</tt> to get started.'

        let dataReceived = false;

        socket.on('close', () => {
        assert.ok(dataReceived);
        done();
        });
        socket.on('message', (data) => {
        dataReceived = true;
        assert.strictEqual(data, str);
        socket.close();
    });
  });

  it('communicates successfully with Error message', (done) => {
    const socket = new WebSocket('ws://localhost:5555', {
      origin: 'http://localhost:7777',
      protocolVersion: 13
    });
    const str = `I'm sorry, I don't understand what you mean.`

    let dataReceived = false;

    socket.on('open', () => socket.send(str));
    socket.on('close', () => {
      assert.ok(dataReceived);
      done();
    });

    //this will fail becuase it's returning as two data set 
    socket.on('message', (data) => {
      dataReceived = true;
      assert.strictEqual(data, str);
      socket.close();
    });
  });

  it('communicates successfully with expected message', (done) => {
    const socket = new WebSocket('ws://localhost:5555', {
      origin: 'http://localhost:7777',
      protocolVersion: 13
    });
    const str = `Help`

    let dataReceived = false;

    socket.on('open', () => socket.send(str));
    socket.on('close', () => {
      assert.ok(dataReceived);
      done();
    });

    //this will fail becuase it's returning as two data set 
    socket.on('message', (data) => {
      dataReceived = true;
      assert.strictEqual(data, `I'm sorry, I don't understand what you mean.`);
      socket.close();
    });
  });
});