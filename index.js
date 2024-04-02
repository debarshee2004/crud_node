// Importing the express library
const express = require("express");

const fs = require("fs");
const path = require("path");

const app = express();

const PORT = 3000;

app.use(express.json());

const dataFIlePath = path.join(__dirname, "data.json");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/items", (req, res) => {
  const newItem = req.body;
  fs.readFile(dataFIlePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error :", err);
      res.status(500).json({
        message: "Server Error",
      });
    }
    let items = JSON.parse(data);
    items.push(newItem);

    fs.writeFile(dataFIlePath, JSON.stringify(items), (err) => {
      if (err) {
        console.error("Error :", err);
        res.status(500).json({
          message: "Server Error",
        });
      }
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
