// hapi v17
'use strict'

const Hapi = require('hapi')

const connection = {
    port: 8000,
    host: 'localhost',
}

const server = Hapi.server(connection)

server.route({
  method: 'GET',
  path: '/',
  // request, reply
  handler: (request, h) => {
    return '<H1>Hello, world!</H1>';
  }
});

const init = async () => {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
