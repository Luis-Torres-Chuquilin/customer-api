/** @format */

const express = require("express");
const router = require("./router/index");

// Security Headers
const helmet = require("helmet");

// Error Middleware
const errorMiddleware = require("./middlewares/errorMiddleware");

// Add to Middleware folder
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

if (!process.env.PORT) {
  throw new Error(
    "Please specify the port number for the HTTP server with the environment variable PORT."
  );
}

const PORT = process.env.PORT || 7070;

console.log("====PORT==== Happy Peru", PORT);

// Listen Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT} 🚀`));
