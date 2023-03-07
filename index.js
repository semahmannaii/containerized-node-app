const express = require("express")
const sequelize = require("./configs/database")
const router = require("./routes/mangas")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/mangas", router)

sequelize
    .sync()
    .then(() => {
        console.log("Databse is connected")
        app.listen(5000, () => {
            console.log("Server is running")
        })
    })
    .catch((err) => {
        console.log(err)
    })