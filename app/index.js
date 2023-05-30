const dotenv = require("dotenv")
dotenv.config({ path: './app/config/config.env' })
const express = require("express")
const app = express()
const PORT = process.env.PORT || 5000
const routes = require('./routes')
const middleware = require('./middleware')
const morgan = require('morgan')
const mongoose = require("mongoose")
const colors = require('colors')
class App {
    constructor(port) {
        this.setupHandelErrors()
        this.setupMiddleware()
        this.setupDatabase()
        this.setupRoutes()
        this.setupServer()
    }
    setupHandelErrors() {
        process.on('unhandledRejection', (err, promise) => {
            console.log(`Error: ${err.message} `.red);
        })
      
    }
    async setupDatabase() {
        try {
            const conn = await mongoose.connect(process.env.MONGO_URL)
            console.log(`MongoDb connected: ${conn.connection.host}`.red);
        } catch (error) {
            console.log(error);
        }
    }
    setupMiddleware() {
        app.use(express.json())
        if (process.env.NODE_ENV === 'development') {
            app.use(morgan('dev'))
            app.use(middleware.logger)
        }
    }
    setupRoutes() {
        app.use(routes)
    }
    setupServer() {
        return app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow))
    }

}

module.exports = App