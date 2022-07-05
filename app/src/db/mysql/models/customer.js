/** @format */

("use strict");

module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    "Customer",
    {
      customerId: {
        type: DataTypes.INTEGER,

        primaryKey: true,
        autoIncrement: true,
      },
      FirstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      DateOfBirth: {
        type: DataTypes.DATEONLY, // YYYY-MM-DD
        allowNull: false,
      },

      Geneder: {
        type: DataTypes.STRING,
        validate: {
          isIn: [["FEMALE", "MALE"]],
        },
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  Customer.associate = function (models) {
    // associations can be defined here
  };

  return Customer;
};
