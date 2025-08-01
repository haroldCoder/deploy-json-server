const jsonServer = require("json-server");
const morgan = require("morgan");

const server = jsonServer.create();
const router = jsonServer.router("transactions.json");
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 3002;

server.use(middlewares);
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
})
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running at port ${PORT}`);
});

