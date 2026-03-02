const express = require('express')

const authcontroller = require("../controllers/auth.controller.js" )
const authRouter = express.Router()


authRouter.post("/register", authcontroller.registerUserController)

module.exports = authRouter