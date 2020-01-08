const express = require('express');
const cors = require('cors')
const helmet = require('helmet') // third-party secure middleware
const logger = require('./loggerMiddleware.js'); // custom logger middleware

// routers
const directoryRouter = require('./directory/directoryRouter.js');

// create server instances
const server = express();

// middeware
server.use(helmet());
server.use(express.json());
server.use(cors());

// routes

// routes accessible without token
server.use("/api/directory",
  logger('directoryRouter call'),
  directoryRouter);

server.get('/', logger('root api call'), (req, res) => {
  res.status(200).json({ 
    api: "Block Club Calendar API running",
    message: "Use the 'api/event' endpoint to access publically available event data. All other data requires authentication, you can register for a new account at '/api/auth/register' in accordance with the documenation at '/docs'"})
});

server.get('*', logger('fallback api call'), (req, res) => {
    res.send('That endpoint is not defined')
});

// export
module.exports = server;