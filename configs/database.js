const Sequelize = require("sequelize")

const sequelize = new Sequelize(
    process.env.PG_DB,
    process.env.PG_USER,
    process.env.PG_PW,
    {
        host: process.env.PG_HOST || "localhost",
        dialect: "postgres"
    }
)

module.exports = sequelize