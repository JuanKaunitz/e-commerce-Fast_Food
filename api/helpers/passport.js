const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('User');

passport.use(new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password'
    }, async (email, password, done) => {
        const user = await User.findOne({ email });
        if(!user) return done(null, false, {
            message: 'user No Existente'
        });

        // el user existe, vamos a verificarlo
        const verificarPass = user.compararPassword(password);
        if(!verificarPass) return done(null, false, {
            message: 'Password Incorrecto'
        });

        // user existe y el password es correcto
        return done(null, user);
}));

passport.serializeUser((user, done) => done(null, user._id));

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id).exec();
    return done(null, user);
});

module.exports = passport;
