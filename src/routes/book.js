const express = require('express')
const router = express.Router()
const {bookController} = require('../controllers')
const {jwtValidMDW, userIsAdmin} = require('../middleware/auth-mdw')

router.post('/:bookId', userIsAdmin, bookController.createBookController)

router.get('/:bookId', jwtValidMDW, bookController.getBookController)

router.put('/:bookId', (req, res) =>{
    console.log(`Se econtro libro con id ${req.params.bookId}`)
    res.json({id: req.params.bookId, ...req.body})
})

module.exports = router

