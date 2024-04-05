const express = require("express"); // Importing Express.js module

const fs = require("fs"); // Importing File System module
const path = require("path"); // Importing Path module

const app = express(); // Creating an instance of Express

const PORT = 3000; // Defining port number

app.use(express.json()); // Middleware to parse incoming JSON requests

const dataFIlePath = path.join(__dirname, "data.json"); // Path to the JSON data file

// Route for handling GET requests to the root URL
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Route for handling POST requests to create new items
app.post("/items", (req, res) => {
  const newItem = req.body; // Extracting new item from request body
  if (Object.keys(req.body).length === 0) {
    // Checking if request body is empty
    res.status(400).send("Invalid request"); // Sending 400 response for invalid request
  }
  fs.readFile(dataFIlePath, "utf8", (err, data) => {
    // Reading data file
    if (err) {
      // Error handling
      console.error("Error :", err);
      res.status(500).json({
        message: "Server Error",
      });
    }
    let items = [];

    try {
      items = JSON.parse(data); // Parsing existing data from file
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return res.status(500).json({
        message: "Server Error",
      });
    }

    items.push(newItem); // Adding new item to the array of items

    fs.writeFile(dataFIlePath, JSON.stringify(items), (err) => {
      // Writing updated data back to file
      if (err) {
        // Error handling
        console.error("Error :", err);
        res.status(500).json({
          message: "Server Error",
        });
      }
      res.status(201).json({
        // Sending successful response
        message: "Item created successfully",
      });
    });
  });
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
