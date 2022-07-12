/** @format */
import express, { Request, Response, NextFunction } from "express";

const ApiError = require("../error/apiError");

const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ApiError) {
    res.status(err.code).json({ status: err.code, message: err.message });
  }

  res.status(500).json({
    status: 500,
    message: "Internal Error",
  });
};

// module.exports = errorMiddleware;

export default errorMiddleware;
