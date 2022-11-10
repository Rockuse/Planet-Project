require('module-alias/register');
const http = require('http');
const loadPlanetData = require('@src/planets/planet.models');
const app = require('./app');

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
async function start() {
  await loadPlanetData();
  server.listen(PORT, () => {
    console.log('connected');
  });
}
start();