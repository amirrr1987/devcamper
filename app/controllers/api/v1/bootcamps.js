class Bootcamps {
    getList(req, res) { 
 
        res.status(200).send({
            data: '',
            success: true,
            message: '',
            code: 200,
            action: req.action
        })
     }
    getOne(req,res) { 
        res.status(200).send({
            data: '',
            success: true,
            message: '',
            code: 200,
            action: req.action
        })
     }
    createOne(req,res) { 
        res.status(200).send({
            data: '',
            success: true,
            message: '',
            code: 200,
            action: req.action
        })
     }
    updateOne(req,res) { 
        res.status(200).send({
            data: '',
            success: true,
            message: '',
            code: 200,
            action: req.action
        })
     }
    deleteOne(req,res) { 
        res.status(200).send({
            data: '',
            success: true,
            message: '',
            code: 200,
            action: req.action 
        })
     }
}

module.exports = new Bootcamps()