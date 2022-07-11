/** @format */

const User = require("../../db/mysql/models/index")["User"];

const ApiError = require("../../error/apiError");

class UserService {
  async findAll() {
    return await User.findAll();
  }

  async findOne(username) {
    return await User.findOne({ where: { Username: username } });
  }
  async create(customer) {
    console.log("customer =-----====", customer);
    return await User.create(customer);
  }
}

module.exports = UserService;
