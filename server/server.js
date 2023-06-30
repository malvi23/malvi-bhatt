const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;
const mongoose = require("mongoose");
// const { mongoose } = require('./db.js');
const cors = require("cors");
const routes = require("./routes.js");
const { environment } = require("./env.js");

app.use(bodyParser.json());
// Enable CORS
app.use(
  cors({
    origin: ["https://malvi-bhatt.netlify.app","http://localhost:4200", "http://127.0.0.1:4200"],
    credentials: true,
  })
);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", true);
  res.header("Access-Control-Allow-Credentials", "Content-Type");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  next();
});

// Defining a route for the root URL ("/")
app.get('/', (req, res) => {
  res.send(`Server is running on port ${port}`);
});

// API routes
app.use(`/api/${environment.API_VERSION}`, routes);

// Start the server
app.listen(port, () => {
  console.log(
    `${new Date().toISOString()} : Server is running on port ${port}`
  );
});
