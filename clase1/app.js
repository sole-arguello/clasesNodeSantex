const fs = require('fs')

//de forma asincrona preg si existe el archivo, si existe devuelve true, le agrego 
//al archivo una nueva linea, y retorno la aplicacion
if(fs.existsSync("archivo.txt")){//para que se cree la carpeta lo fuerzo con !
    console.log("El archivo ya existe")

    fs.appendFileSync("archivo.txt", "\nNueva linea!!")
    return
}
 

//si el archivo no existe, defino un contenido, y escribo el archivo
//con la callback verifico si hay un error, e imprimo
// const content = "Contenido para este archivo \n Con salto de linea"

// fs.writeFile("archivo.txt", content, (err, data) => {
//     if(err) throw err
//     console.log(data)
//     // leo el archivo y el tipo, verifica si hay un error
//     // hace un split de cada linea, recorriendolas y poniendo cada linea 
//     //y el numero de las mismas
//     fs.readFile('archivo.txt', 'utf-8', (err, data)=>{
//         if (err) throw err
//         let lineN = 0
//         data.split("\n").forEach((line) => {
//             console.log(`Linea ${lineN}`, line)
//             lineN ++ 
//         })
        
//     })
// })



// corro la aplicacion con npm run start,la primera vez como no existe
// lo crea (writeFile seguido de readFile) y con el contenido que le envio en la data, 
//la segunda vez como existe lo que hace es leer (writeFile) el archivo y 
//agregar lo que le envie (existsSync)


//---------------- otra forma -----------------

const content = "Contenido para este archivo \n Con salto de linea"

try{
    const data = fs.writeFileSync("archivo.txt", content)
    console.log(data)
    data = fs.readFileSync('archivo.txt', 'utf-8')
    let lineN = 0
    data.split("\n").forEach((line) => {
        console.log(`Linea ${lineN}`, line)
        lineN ++ 
    })
    //para que se cree la carpeta lo fuerzo con !
    fs.mkdirSync("lala")
    
}catch (err){
    throw err
}

