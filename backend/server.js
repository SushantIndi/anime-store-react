import jsonServer from "json-server";
import cors from "cors";

const server = jsonServer.create();
const router = jsonServer.router("db.json");

// 🔴 DO NOT use jsonServer.defaults() for CORS
server.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

// Handle preflight requests explicitly
server.options("*", cors());

server.use(jsonServer.bodyParser);
server.use("/users", router);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log("JSON Server running on port", PORT);
});
