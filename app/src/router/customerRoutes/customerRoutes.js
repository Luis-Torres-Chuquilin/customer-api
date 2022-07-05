/** @format */

const express = require("express");
const ApiError = require("../../error/apiError");
const CustomerService = require("../../services/customersService/customerService");
// Models

const customerService = new CustomerService();
const router = express();

router.get("/customer/:id", async (req, res, next) => {
  let id = req.params.id;
  let customer = await customerService.findOne(id);

  const msg = null;
  if (!customer) {
    next(ApiError.notFound("Customer Not Found"));
    return;
  }
  res.send(customer);
});

router.post("/customer", async (req, res, next) => {
  let customer = req.body;

  customer = await customerService.create(customer);

  if (!customer) {
    next(ApiError.notFound("Customer Not Found"));
    return;
  }
  res.send(customer);
});

module.exports = router;
