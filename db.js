const { Sequelize } = require("sequelize")
require('dotenv').config()
const { DATA_DB, USER_DB, PASS_DB, HOST_DB, DIAL_DB } = process.env

const sequelize = new Sequelize(
  DATA_DB,
  USER_DB,
  PASS_DB,
  {
    host: HOST_DB,
    dialect: DIAL_DB
  }
)

sequelize.sync().then(() => console.log('Connected to MySQL database'))

module.exports = {
  sequelize,
  Sequelize
}