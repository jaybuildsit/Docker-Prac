import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get('/api/data',(req,res)=>{

    const data={
        message: "This is some random data from the backend API."
    };

    res.json(data);
});

export default app;