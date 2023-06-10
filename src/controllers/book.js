const {bookService} = require('../services')

const createBookController = (req, res) =>{

    try{
        const newBook = bookService.createBook(req.params.bookId, req.body)
        res.json(newBook)
    }catch (err) {
        res.status(400).json({acttion: 'createBook', erro: err.message})
    }
}

const getBookController = (req, res) =>{
    console.log(`Se econtro libro con id ${req.params.bookId}`)
    res.json({id: req.params.bookId, name:'Lord'})
}



module.exports = {createBookController, getBookController}