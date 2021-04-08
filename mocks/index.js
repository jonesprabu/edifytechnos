const jsonServer = require('json-server');
const server = jsonServer.create();
const apiJson = require('./db/db');
const router = jsonServer.router(apiJson());
const middlewares = jsonServer.defaults();
// const middlewares = require('./api-middleware');
const PORT = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
  console.log(`JSON Server is running is running in http://localhost:${PORT}`);
})
