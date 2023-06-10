const express = require('express')
const router = express.Router()
const {bookController} = require('../controllers')

router.post('/:bookId', bookController.createBookController)

router.get('/:bookId', bookController.getBookController)

router.put('/:bookId', (req, res) =>{
    console.log(`Se econtro libro con id ${req.params.bookId}`)
    res.json({id: req.params.bookId, ...req.body})
})

module.exports = router

