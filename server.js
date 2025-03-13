const cors = require("cors");
const jsonServer = require("json-server");
const path = require("path");
const auth = require("json-server-auth");
const fs = require("fs");

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
server.use(cors());
server.use(middlewares);

const dataFolder = path.join(__dirname, "data");
const db = {};

fs.readdirSync(dataFolder).forEach((file) => {
  if (file.endsWith(".json")) {
    const resourceName = file.replace(".json", "");
    const filePath = path.join(dataFolder, file);
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    // Object.assign(db, data);
    db[resourceName] = Array.isArray(data) ? data : Object.values(data);
  }
});

const router = jsonServer.router(db);
server.db = router.db;

server.use(auth);

server.use("/swagger", (req, res) => {
  res.sendFile(path.join(__dirname, "swagger.json"));
});

const swaggerUiPath = require("swagger-ui-dist").absolutePath();
server.use("/docs", jsonServer.defaults({ static: swaggerUiPath }));

server.use(router);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
  console.log(`Swagger JSON available at: http://localhost:${PORT}/swagger`);
  console.log(`Swagger UI available at: http://localhost:${PORT}/docs`);
});

module.exports = server;
