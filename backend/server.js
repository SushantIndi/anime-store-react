import jsonServer from "json-server";
import cors from "cors";

const server = jsonServer.create();
const router = jsonServer.router("db.json");

const PORT = process.env.PORT || 5000;

server.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type"]
    })
);

server.use(jsonServer.bodyParser);

server.use("/users", router);

server.listen(PORT, () => {
    console.log("JSON Server running on port", PORT);
});
