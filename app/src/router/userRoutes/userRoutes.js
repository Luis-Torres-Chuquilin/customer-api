/** @format */
const express = require("express");

const ApiError = require("../../error/apiError");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secret = "test";
const router = express();

//  Users Service - Database Queries
const UserService = require("../../services/userService/userService");

// Validator Schema
const userSchema = require("../../db/mysql/models/user");
// Validator Middleware
const validateSchema = require("../../middlewares/schemaMiddleware");
// Users Data
const users = require("../../config/config")["users"];

const userService = new UserService();

// signin
router.post("/signin", async (req, res, next) => {
  const { username, password } = req.body;

  try {
    // Find if the user is in the database
    const user = userService.findOne(username);

    if (!user) {
      next(ApiError.notFound("User Not Found"));
      return;
    }

    const passwordCorrect = await bcrypt.compare(password, user.passwordHash);

    if (!passwordCorrect) {
      next(ApiError.badRequestPass("Password Incorrect"));
      return;
    }

    const token = jwt.sign({ email: user.email, id: user.id }, secret, {
      expiresIn: "2h",
    });
    res.json({ result: username, token });
  } catch (e) {
    next(ApiError.serVerError("Internal Error"));
  }
});

// POST - Signup
router.post(
  "/signup",
  validateSchema.validateUser(userSchema.userSignupSchema),
  async (req, res, next) => {
    const user = req.body.value;
    const { Username, Password } = user;

    try {
      // Find if the user is in the database
      const user = await userService.findOne(Username);

      if (user) {
        next(ApiError.userAlreadyExist("User already Exist"));
        return;
      }

      const passwordHash = await bcrypt.hash(Password, 12);
      console.log("req body ======", passwordHash);

      newUser = await userService.create({
        Username: Username,
        Password: passwordHash,
      });

      console.log("newUser =======", newUser);

      const token = jwt.sign(
        { email: newUser.Username, id: newUser.UserId },
        secret,
        {
          expiresIn: "2h",
        }
      );

      res.json({ Username, token });
    } catch (e) {
      next(ApiError.serVerError("Internal Error"));
    }
  }
);

// HANDLER - METHOD NOT ALLOW , THIS COULD MOVE TO UTILS FOLDER
const handleMethodNotAllow = async (req, res, next) => {
  next(ApiError.methodNotAllowed("Method Not Allow In This Route"));
  return;
};

router.get("/signin", handleMethodNotAllow);
router.put("/signin", handleMethodNotAllow);
// router.patch("/signin"), handleMethodNotAllow;
router.delete("/signin", handleMethodNotAllow);

router.get("/signup", handleMethodNotAllow);
router.put("/signup", handleMethodNotAllow);
// router.patch("/signup"), handleMethodNotAllow;
router.delete("/signup", handleMethodNotAllow);

module.exports = router;
