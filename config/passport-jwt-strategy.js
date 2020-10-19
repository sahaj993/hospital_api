const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const Doctor = require('../models/doctor');

let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'hospital',
}

passport.use(new JWTStrategy(opts, function(jwtPayLoad, done){
    Doctor.findById(jwtPayLoad._id, function(err, doctor){
        if (err){console.log('Error in finding the doctor'); return;}
        if (doctor){
            return done(null, doctor);
        }else{
            return done(null, false);
        }
    })
}));

passport.serializeUser(function(user, done){
    done(null, user.id);
})


passport.deserializeUser(function(id, done){
    Doctor.findById(id, function(err, user){
        if (err){
            console.log('Error in finding user --> Passport');
            return done(err);            
        }
        return done(null, user);
    })
});

passport.checkAuthentication = function(req, res, next){
    if (req.isAuthenticated()){
        return next();
    }
}

passport.setAuthenticatedUser = function(req,res,next){
    if (req.isAuthenticated()){
        res.locals.user = req.user;
    }
    next();
}


module.exports = passport;

