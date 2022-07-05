/** @format */

const express = require("express");
const router = require("./router/index");
// Error Middleware
const errorMiddleware = require("./middlewares/errorMiddleware");

const app = express();
app.use(express.json());
// Routes
app.use("/", router);

// Middlewares
app.use(errorMiddleware);

// Listen Server
const PORT = 8000;
app.listen(8000, () => console.log(`🚀 Server running on port ${PORT} 🚀`));
