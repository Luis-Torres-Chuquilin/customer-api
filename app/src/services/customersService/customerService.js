/** @format */

const Customer = require("../../db/mysql/models/index")["Customer"];

class CustomerService {
  async findOne(id) {
    return await Customer.findOne({ where: { customerId: id } });
  }
  async create(customer) {
    return await Customer.create(customer);
  }
}

module.exports = CustomerService;
