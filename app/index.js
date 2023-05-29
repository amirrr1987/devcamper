const dotenv = require("dotenv")
dotenv.config({ path: './app/config/config.env' })
const express = require("express")
const app = express()
const PORT = process.env.PORT || 5000





class App {
    constructor(port) {
        this.setupServer()
    }
    setupServer() {
        app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
    }
    
}

module.exports = App