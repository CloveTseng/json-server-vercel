const cors = require("cors");
const jsonServer = require("json-server");
const path = require("path");
const auth = require("json-server-auth");
const fs = require("fs");

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
server.use(cors());
server.use(middlewares);

// 讀取多個 JSON 檔案並合併成 db 物件
const dataFolder = path.join(__dirname, "data");
const db = {};

fs.readdirSync(dataFolder).forEach((file) => {
  if (file.endsWith(".json")) {
    const filePath = path.join(dataFolder, file);
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    Object.assign(db, data);
  }
});

// 使用 json-server 的 router，傳入合併後的 db
const router = jsonServer.router(db);
server.db = router.db;

// 使用 json-server-auth
server.use(auth);

// 提供 Swagger JSON 文件
server.use("/swagger", (req, res) => {
  res.sendFile(path.join(__dirname, "swagger.json"));
});

// 提供 Swagger UI
const swaggerUiPath = require("swagger-ui-dist").absolutePath();
server.use("/docs", jsonServer.defaults({ static: swaggerUiPath }));

// 設定路由
server.use(router);

// 啟動伺服器
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
  console.log(`Swagger JSON available at: http://localhost:${PORT}/swagger`);
  console.log(`Swagger UI available at: http://localhost:${PORT}/docs`);
});

// Export the Server API
module.exports = server;
