import jsonServer from "json-server";
import cors from "cors";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 5000;

// ✅ Explicit CORS config (IMPORTANT)
server.use(
    cors({
        origin: [
            "http://localhost:5173",
            "https://anime-store-react-app.netlify.app"
        ],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    })
);

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);

server.listen(PORT, () => {
    console.log("JSON Server running on port", PORT);
});
