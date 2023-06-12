const {Sequelize} = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    //por el error
    //storage: '/var./database.sqlite',
})

const initializeDB = async () => {
    try{
        await sequelize.authenticate()
        console.log('Conexion a la base de datos establecida')
        await sequelize.sync({force: false})
    }catch(error) {
        console.error('Hubo un error al inicializar la base de datos',error)
    }
}

module.exports = {sequelize, initializeDB}