import { createServer } from "http";
import dotenv from "dotenv";
import { Helper } from "./helper";
dotenv.config();





const PORT = process.env.PORT || 3000;

const server = createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});
console.log(Helper.getHello());
server.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT} and env is ${process.env.NODE_ENV}`
  );
});
