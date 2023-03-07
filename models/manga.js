const Sequelize = require("sequelize")
const db = require("../configs/database")

const Manga = db.define("manga", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: Sequelize.STRING,
    chapters: Sequelize.INTEGER
})

module.exports = Manga