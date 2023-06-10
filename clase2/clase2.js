const http = require('http')
const fs = require('fs')
const axios = require('axios')

const PORT = 9050

const server = http.createServer((req, res) => {
    if(req.url === "/user" && req.method === "GET"){
        res.writeHead(200, { 'Content-Type': 'application/json'})
        const user = {name: 'Pepe', lastname: 'Perez'}
        console.log('JSON: ', JSON.stringify(user))
        res.write(JSON.stringify(user))
        res.end()
        return
    }else if(req.url === "/book" && req.method === "GET") {
        res.writeHead(200, {'Content-Type': 'application/json'})
        const book = { isbn: 123334455, name: "Lord of the Rings"}
        console.log('JSON: ', JSON.stringify(book))
        res.write(JSON.stringify(book))
        res.end()
        //res.end('<h1>Hola Mundo</h1>')
        return
    }else if (req.url === "/book" && req.method === "POST"){
        let body = ""
        req.on('data', (chunk) => {
            body += chunk
        })
        req.on('end', () => {
            const book = JSON.parse(body)
            console.log(book)
            try{
                fs.writeFileSync('book', body)
                res.writeHead(201, {'Content-Type': 'application/json'})
                res.write(JSON.stringify(book))
                res.end()
            }catch{
                console.error(err)
                res.writeHead(500)
                res.write({error: err})
                res.end()
            }
        })
    }else if (req.url === "/"){
        res.end('<h1>Hola Mundo</h1><h3>Este es mi primer server</h3>')
        return
    }else{
        res.writeHead (404)
        res.end()
    }
})

server.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`)
    //libreria http
    const options = {hostname: 'localhost', port: PORT, path:'/user3', method: "GET"}
    const req = http.request(options, (res) => {
        let data = ""
        res.on("data", (chumk) => {
            data += chumk
        })

        res.on("end", () =>{
            console.log("Datos del servidor:", data)
        })
    })
    req.on("error", (err) => {
        console.log(err)
    })
    req.end()
})