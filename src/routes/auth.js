const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const {SERVER_SECRET} = require('../middleware/auth-mdw')

router.post('/', async (req, res) => {
    const {user, pass} = req.body
    if(user === 'admin' && pass === 'admin'){
        const token = jwt.sign({user, role: 'Admin'}, SERVER_SECRET )
        res.json({token})
    }else{
        res.status(401).json({error: 'Invalid User'})
    } 
})

module.exports = router