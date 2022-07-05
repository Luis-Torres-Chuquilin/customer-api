/** @format */

const ApiError = require("../error/apiError");

function errorMiddleware(err, req, res, next) {
  if (err instanceof ApiError) {
    res.status(err.code).json({ status: err.code, message: err.message });
  }

  res.status(500).json("Something went wrong");
}

module.exports = errorMiddleware;
