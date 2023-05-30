const models = require('../../../models')
class Bootcamps {
    async getList(req, res) {

        try {
            const bootcamps = await models.api.v1.bootcampModel.find()
            res.status(200).send({
                data: bootcamps,
                success: true,
                message: '',
                code: 200,
                action: req.action
            })
        } catch (err) {
            res.status(400).send({
                success: false,
                message: err.message,
                code: 400,
                action: req.action
            })
        }

    }
    async getOne(req, res) {
        try {
            const bootcamp = await models.api.v1.bootcampModel.findById(req.params.id)
            if (!bootcamp) {
                return res.status(400).send({
                    data: bootcamp,
                    success: false,
                    message: `can not find ${req.params.id}`,
                    code: 400,
                    action: req.action
                })
            }
            res.status(200).send({
                data: bootcamp,
                success: true,
                message: '',
                code: 200,
                action: req.action
            })
        } catch (err) {
            res.status(400).send({
                success: false,
                message: err.message,
                code: 400,
                action: req.action
            })
        }

    }
    async createOne(req, res) {
        try {
            const bootcamp = await models.api.v1.bootcampModel.create(req.body)
            res.status(201).send({
                data: bootcamp,
                success: true,
                message: '',
                code: 201,
                action: req.action
            })
        } catch (err) {
            res.status(400).send({
                success: false,
                message: err.message,
                code: 400,
                action: req.action
            })
        }


    }
    async updateOne(req, res) {

        try {
            const bootcamp = await models.api.v1.bootcampModel.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true,
            })
            if (!bootcamp) {
                return res.status(400).send({
                    data: bootcamp,
                    success: false,
                    message: `can not find ${req.params.id}`,
                    code: 400,
                    action: req.action
                })
            }
            res.status(200).send({
                data: bootcamp,
                success: true,
                message: '',
                code: 200,
                action: req.action
            })
        } catch (err) {
            res.status(400).send({
                success: false,
                message: err.message,
                code: 400,
                action: req.action
            })
        }
    }
    async deleteOne(req, res) {

        try {
            const bootcamp = await models.api.v1.bootcampModel.findByIdAndDelete(req.params.id)
            if (!bootcamp) {
                return res.status(400).send({
                    data: bootcamp,
                    success: false,
                    message: `can not find ${req.params.id}`,
                    code: 400,
                    action: req.action
                })
            }

            res.status(200).send({
                data: bootcamp,
                success: true,
                message: '',
                code: 200,
                action: req.action
            })
        } catch (err) {
            res.status(400).send({
                success: false,
                message: err.message,
                code: 400,
                action: req.action
            })
        }


    }
}

module.exports = new Bootcamps()