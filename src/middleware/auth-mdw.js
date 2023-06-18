const SERVER_SECRET = 'secretoQueSoloConoceElServer'

const passport = require('passport')
const passportJwt = require('passport-jwt')
const JWTStrategy = passportJwt.Strategy
const ExtractJWT = passportJwt.ExtractJwt

passport.use(
    new JWTStrategy(
        {
          jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
          secretOrKey: SERVER_SECRET,
        },
        (jwPayload, done) => {
            const user = jwPayload
            return done(null, user)
        }

    )

)

const jwtValidMDW = passport.authenticate('jwt', {session: false})

const userIsAdmin = (req, res, next)=> {
    return passport.authenticate('jwt', {session: false}, (err, user, info) => {
        if(err){
            console.error(err)
            return next(err)
        }

        if(user.role === 'Admin'){
            req.user = user
            return next()
        }

        res.status(401).json({error: 'User not Admin'})
    }) (req, res, next)
}

module.exports = { jwtValidMDW, userIsAdmin, SERVER_SECRET }