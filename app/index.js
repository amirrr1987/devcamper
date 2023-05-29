const dotenv = require("dotenv")
dotenv.config({ path: './app/config/config.env' })
const express = require("express")
const app = express()
const PORT = process.env.PORT || 5000
const routes = require('./routes')
const middleware = require('./middleware')
const morgan = require('morgan')

class App {
    constructor(port) {
        this.setupMiddleware()
        this.setupRoutes()
        this.setupServer()
    }
    setupMiddleware() {
        if (process.env.NODE_ENV === 'development') {
            app.use(morgan('dev'))
            app.use(middleware.logger)
        }
    }
    setupRoutes() {
        app.use(routes)
    }
    setupServer() {
        app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
    }

}

module.exports = App