const { User, Ticket } = require('../models')

const createUser = async (user)=> {
    try{
        const newUser = await User.create(user)
        return newUser
    }catch (error){
        console.error('Error when creating User',error)
        throw error
    }
}

const getUser = async (userId)=> {
    try{
        const user = await User.findByPk(userId, {include: {all: true}})
        return user
    }catch (error){
        console.error('Error when fetching User',error)
        throw error
    }
}

const createTicket = async (userId, ticket)=> {
    try{
        const newTicket = await Ticket.create({...ticket, UserId: userId})
        return newTicket
    }catch (error){
        console.error('Error when creating Ticket',error)
        throw error
    }
}

module.exports = { createUser, getUser, createTicket }