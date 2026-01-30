import jsonServer from "json-server";
import cors from "cors";

const server = jsonServer.create();
const router = jsonServer.router("db.json"); // or data.json (must exist)
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 5000;

server.use(cors());
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);

server.listen(PORT, () => {
    console.log("JSON Server running on port", PORT);
});
