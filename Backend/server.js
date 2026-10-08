import express from "express";
import morgan from "morgan";
import cors from 'cors';
const app = express();

app.use(morgan("dev"));
app.use(express.static('public'));
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/hello", (req, res) => {
  res.status(200).json({ message: "Hello, World!" });
});

app.get("/api/users", (req, res) => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];
  res.status(200).json(users);
});

app.get("*name", (req, res) => {
    res.sendFile("public/index.html", { root: __dirname });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});