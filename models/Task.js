const { Sequelize, sequelize } = require("../services/sequelize");
const User = require("./User");
const Category = require("./Category");
const Group = require("./Group");

const Task = sequelize.define("task", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  deadline: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  tags: {
    type: Sequelize.STRING,
  },
  remindAt: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  priority: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
});

Task.belongsTo(User);
Task.belongsTo(Category);
Task.belongsTo(Group);

sequelize
  .sync()
  .then(() => {
    console.log("Tasks table synced.");
  })
  .catch((e) => console.log(e));

module.exports = Task;
