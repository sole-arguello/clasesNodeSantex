
const { userProvider } = require('../providers')

const createUser = async (user) => {

   return await userProvider.createUser(user)
}

const getUser = async (userId)=>{
    const user = await userProvider.getUser(userId)
    if(user){
        //logica de negocio
        console.log(user.firstName)
    }
    return user
}
module.exports = {createUser, getUser}