require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const db = require("./db");
const routes = require("./routes/index");
const PORT = process.env.PORT | 7000;

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// Routes
app.use("/v1/api", routes);

// Server Creation
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
