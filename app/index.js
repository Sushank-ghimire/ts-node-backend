"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_http_1 = __importDefault(require("node:http"));
const app = (0, express_1.default)();
const port = 3000;
const server = node_http_1.default.createServer(app);
app.use(express_1.default.json()); // JSON parsing ke liye
app.get("/", (req, res) => {
    res.json({ message: "Server is running Wooh!" });
});
server.listen(port, () => {
    console.log(`Server chal raha hai http://localhost:${port} pe`);
});
