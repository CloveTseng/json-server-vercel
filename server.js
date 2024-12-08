const cors = require('cors');
const jsonServer = require('json-server');
const path = require('path');
const auth = require("json-server-auth");

const server = jsonServer.create();
const db = require("./db.json");
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);
server.db = router.db;

// 使用 json-server-auth
server.use(auth);

// 提供 Swagger JSON 文件
server.use('/swagger', (req, res) => {
    res.sendFile(path.join(__dirname, 'swagger.json'));
});

// 提供 Swagger UI 静态文件
const swaggerUiPath = require('swagger-ui-dist').absolutePath();
server.use('/docs', jsonServer.defaults({ static: swaggerUiPath }));

// 加载路由
server.use(router);

// 启动服务器
server.listen(3000, () => {
    console.log('JSON Server is running');
    console.log('Swagger JSON available at: https://json-server-vercel-5mr9.onrender.com/swagger');
    console.log('Swagger UI available at: https://json-server-vercel-5mr9.onrender.com/docs');
});

// Export the Server API
module.exports = server;
