const fs = require("fs")
const mongoose = require("mongoose")
const colors = require("colors")
const dotenv = require("dotenv")


dotenv.config({ path: './app/config/config.env' })


const models = require("./app/models")
mongoose.connect(process.env.MONGO_URL)




const bootcamps = JSON.parse(fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8'))


const importData = async () => {
    try {
        await models.api.v1.bootcampModel.create(bootcamps)
        console.log(`Data imported ...`.green.inverse)
        process.exit()
    } catch (error) {
        console.log(error);
    }
}

// delete data

const deleteData = async () => {
    try {
        await models.api.v1.bootcampModel.deleteMany()
        console.log(`Data destroyed ...`.red.inverse)
        process.exit()
    } catch (error) {
        console.log(error);
    }
}

if (process.argv[2] === '-i') {
    importData()
}
else if (process.argv[2] === '-d') {
    deleteData()
}