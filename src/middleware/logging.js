const loggingMdw = (req,res, next) => {
    console.log(`Call made to resource ${req.url} with method ${req.method}`)
    req.user = {name: "Sole" }
    next()
}

module.exports = loggingMdw