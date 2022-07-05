/** @format */
const express = require("express");
const customerRoutes = require("./customerRoutes/customerRoutes");

const router = express();

router.use("/api", customerRoutes);

module.exports = router;
