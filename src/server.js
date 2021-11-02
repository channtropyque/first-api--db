const express = require('express');
const routes = require('./routes');

require('dotenv').config();

require('./database');

const api = express();

const protocol = process.env.PROTOCOL || "http"
const ip = require('ip').address()

const PORT = process.env.API_PORT || 3333 

api.use(express.json());
api.use(routes);

api.listen(PORT, () => console.log(`
   Server started in http://localhost:${PORT} or ${protocol}://${ip}:${PORT}
`));