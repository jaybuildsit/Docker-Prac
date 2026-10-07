import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/hello", (req, res) => {
  res.status(200).json({ message: "Hello, World!" });
});

app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];
  res.status(200).json(users);
});



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});