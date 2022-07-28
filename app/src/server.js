/** @format */

const express = require("express");
const router = require("./router/index");

// Security Headers
const helmet = require("helmet");

// Error Middleware
const errorMiddleware = require("./middlewares/errorMiddleware");

function routeNotFound(req, res, next) {
  res.status(404).send({
    status: 404,
    error: "Route not found",
  });
  next();
}

const app = express();
// Third Party Middleware
app.use(helmet());
app.use(express.json());

// Routes
app.use("/", router);

// Middlewares
app.use(errorMiddleware);
app.use(routeNotFound);

// Listen Server
const PORT = 8000;
app.listen(8000, () => console.log(`🚀 Server running on port ${PORT} 🚀`));
