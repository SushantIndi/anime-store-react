import jsonServer from "json-server";
import cors from "cors";

const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 10000;
server.use(
    cors({
        origin: "https://anime-store-react-app.netlify.app",
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type"]
    })
);

server.options("*", cors());

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use(router);

server.listen(PORT, () => {
    console.log(`JSON Server running on port ${PORT}`);
});
