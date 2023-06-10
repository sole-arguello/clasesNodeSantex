const http = require('http')
const PORT = 9050

const server = http.createServer((req, res) => {
    if(req.url === "/user" && req.method === "GET"){
        res.writeHead(200, { 'Content-Type': 'application/json'})
        const user = {name: 'Pepe', lastname: 'Perez'}
        console.log('JSON: ', JSON.stringify(user))
        res.write(JSON.stringify(user))
        res.end()
        return
    }else if(req.url === "/") {
        res.end('<h1>Hola Mundo</h1>')
        return
    }
    res.writeHead (404)
    res.end()
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