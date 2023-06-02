const dotenv = require("dotenv")
dotenv.config({ path: './app/config/config.env' })
const express = require("express")
const app = express()
const routes = require('./routes')
const middleware = require('./middleware')
const morgan = require('morgan')
const mongoose = require("mongoose")
const colors = require('colors')
class App {
    constructor({port,db,mode}) {
        this.port = port
        this.db = db
        this.mode = mode
        this.setupHandelErrors()
        this.setupDatabase()
        this.setupMiddlewareBefore()
        this.setupRoutes()
        this.setupMiddlewareAfter()
        this.setupServer()
    }
    setupHandelErrors() {
        process.on('unhandledRejection', (err, promise) => {
            console.log(`Error: ${err.message} `.red);
          })
      
    }
    async setupDatabase() {
        try {
            const conn = await mongoose.connect(this.db)
            console.log(`MongoDb connected: ${conn.connection.host}`.red);
        } catch (error) {
            console.log(error);
        }
    }
    setupMiddlewareAfter() {
        app.use(middleware.after.errorHandler)
        app.use(middleware.after.successHandler)
    }
    setupMiddlewareBefore() {
        app.use(express.json())
        if (this.mode === 'development') {
            app.use(morgan('dev'))
            app.use(middleware.before.logger)
        }

    }
    setupRoutes() {
        app.use(routes)

    }
    setupServer() {
        return app.listen(this.port, console.log(`server running in ${this.mode} mode on port ${this.port}`.yellow))
    }

}

module.exports = App