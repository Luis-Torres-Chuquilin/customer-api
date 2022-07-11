/** @format */

const Joi = require("joi").extend(require("@joi/date"));

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      UserId: {
        type: DataTypes.INTEGER,

        primaryKey: true,
        autoIncrement: true,
      },
      Username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  User.associate = function (models) {
    // associations can be defined here
  };

  return User;
};

const userSignupSchema = Joi.object().keys({
  UserId: Joi.string().messages({
    "string.base": `Username should be a type of 'text'`,
    "string.empty": `Username cannot be an empty field`,
  }),

  Username: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required()
    .messages({
      "string.base": `Username should be a type of 'text'`,
      "string.empty": `Username cannot be an empty field`,
    }),

  Password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .required()
    .messages({
      "string.base": `Lastname should be a type of 'text'`,
      "string.empty": `Password cannot be an empty field`,
    }),
});

const userIdSchema = Joi.number().integer().required();

module.exports.userSignupSchema = userSignupSchema;
module.exports.userSchema = userIdSchema;
