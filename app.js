const express = require("express");
const path = require("path");

const app = express();

const myLogger = (req, res, next) => {
  console.log("Middleware Log 1");
  next();
};

const myLogger2 = (req, res, next) => {
  console.log("Middleware Log 2");
  next();
};

//MIDDLEWARES
app.use(express.static("public"));
app.use(myLogger);
app.use(myLogger2);

const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./temp/index.html"));
});

app.listen(port, () => {
  console.log(`sunucu ${port}'unda başlatıldı`);
});
