const {bookService} = require('../services')

const createBookController = (req, res) =>{

    try{
        console.log(`Book create by user with role ${req.user.role}`)
        
        const newBook = bookService.createBook(req.params.bookId, req.body)
        res.json(newBook)
    }catch (err) {
        res.status(400).json({acttion: 'createBook', erro: err.message})
    }
}

const getBookController = (req, res) =>{
    console.log(`Book found with id ${req.params.bookId}`)
    res.json({id: req.params.bookId, name:'Lord of the rings'})
}



module.exports = {createBookController, getBookController}