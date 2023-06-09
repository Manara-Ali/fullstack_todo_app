const express = require("express");

const cors = require("cors");

const todoRouter = require("./routes/todoRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/v1/todos", todoRouter);

module.exports = app;
