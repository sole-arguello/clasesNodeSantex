const express = require('express')
//llamado de archivos
const {bookRouter, userRouter} = require('./routes')
const loggingMdw = require('./middleware/logging')

//traigo 
const { initializeDB } = require('./config/db-config')

const PORT = 8090
const bookFile = 'book.json'

const app = express()
//aplication Middelewares
app.use(express.json())

app.use(loggingMdw)
 //a nivel ruta 
app.get('/user', (req, res)=>{
    console.log('user', req.user)

    res.send('<h1 >Hello World</h1>')
} )

app.use('/book', bookRouter)
app.use('/user', userRouter)

//a nivel manejo de errores
const errorHandler = (err, req, res) => {
    if(err.message === 'File Exists'){
        res.status(500)
        //res.json({message: `File ${bookFile} exists`})
        res.send(`File ${bookFile} exists`)
    }else{
        res.status(500)
        //res.json({message: err.message})
        res.send(err)
    }
}

app.use(errorHandler)

app.listen(PORT, async () => {
    await initializeDB()
    console.log(`Server running in ${PORT}`)
})