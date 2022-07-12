/** @format */
import express, { Request, Response, NextFunction } from "express";

const router = require("./router/index");
//  Correlation id
const correlator = require("express-correlation-id");
// Error Middleware
import errorMiddleware from "./middlewares/errorMiddleware";

function routeNotFound(req: Request, res: Response, next: NextFunction) {
  res.status(404).send({
    status: 404,
    error: "Route not found",
  });
  next();
}

const app = express();

app.use(express.json());
app.use(correlator());
// Routes
app.use("/", router);

// Middlewares
app.use(errorMiddleware);
app.use(routeNotFound);

// const PORT = 8000;
// app.listen(8000, () => console.log(`🚀 Server running on port ${PORT} 🚀`));

// module.exports = app;
export default app;
