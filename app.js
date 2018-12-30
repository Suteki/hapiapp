// hapi v17
'use strict'

const Hapi = require('hapi')

const connection = {
    port: 8000,
    host: 'localhost',
}

const server = Hapi.server(connection)

// Home route
server.route({
  method: 'GET',
  path: '/',
  // request, reply
  handler: (request, h) => {
    return '<H1>Hello, world!</H1>';
  }
});

// Dynamic route
server.route({
  method: 'GET',
  path: '/user/{name}',
  handler: (request, h) => {
    return `Hello,  ${encodeURIComponent(request.params.name)}!`;
  }
});

const init = async () => {
  await server.register(require('inert')); // <-- adds the inert plugin to hapi application
  
  // Static route
  server.route({
    method: 'GET',
    path: '/hello',
    handler: (request, h) => {
      return h.file('./public/about.html');
    }
  });

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
