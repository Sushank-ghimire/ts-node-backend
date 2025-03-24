import express, { Request, Response } from "express";
import http from "node:http";

const app = express();
const port = 3000;

const server = http.createServer(app);

app.use(express.json()); // JSON parsing ke liye

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Server is running Wooh!" });
});

server.listen(port, () => {
  console.log(`Server chal raha hai http://localhost:${port} pe`);
});
