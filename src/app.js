import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello there");
});

app.listen(8080, () => console.log(`Server is listening on pprt ${8080}`));
