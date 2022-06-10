const s = require("sequelize");
const db = require("../config/db");

const Product = require("./Product");
const User = require("./User");

class Order extends s.Model {}
Order.init(
  {
    status: {
      type: s.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "orders" }
);

module.exports = Order;
