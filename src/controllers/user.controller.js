const {userService} = require('../services')

const createUser = async (req, res) =>{

    try{
        const newUser = await userService.createUser(req.body)
        res.json(newUser)
    }catch (err) {
        res.status(500).json({action: 'createUser', erro: err.message})

    }
}

const getUser= async (req, res) =>{
    try{
        const user = await userService.getUser(req.params.userId)
        if(!user){
            res.status(404).json({action: 'getUser', error: 'User Not Found'})
        }else{
            res.json(user)
        }
        
    }catch (err) {
        res.status(500).json({action: 'getUser', error: err.message})

    }
}

const createTicket = async (req, res) =>{
    try{
        const user = await userService.createTicket(req.params.userId, req.body)
        if(!user){
            res.status(404).json({action: 'createTicket', error: 'User Not Found'})
        }else{
            res.json(user)
        }
        
    }catch (err) {
        res.status(500).json({action: 'createTicket', error: err.message})

    }
}

module.exports = {createUser, getUser, createTicket }