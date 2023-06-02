const App = require('./app')
new App({ port: process.env.PORT, db: process.env.MONGO_URL, mode: process.env.NODE_ENV })
