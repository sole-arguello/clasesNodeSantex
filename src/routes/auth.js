const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const { userService } = require('../services')

const {SERVER_SECRET} = require('../middleware/auth-mdw')

router.post('/', async (req, res) => {
    const {user, pass} = req.body
    if(user === 'admin' && pass === 'admin'){
        const token = jwt.sign({user, role: 'Admin'}, SERVER_SECRET )
        res.json({token})
    }else{
        const userFound = await userService.validateUser(user, pass)
        if(userFound){
            const token = jwt.sign({user, role: 'User'}, SERVER_SECRET )
            return res.json({token})         
        }
        res.status(401).json({error: 'Invalid User'})
    } 
})

module.exports = router