'use strict'

let jwt = require('jwt-simple');
let moment = require('moment');
var secret = "clave_secreta"

exports.createToken = function(user) {
    let payload = {
        sub: user._id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        rol: user.rol,
        image: user.image,
        iat: moment().unix(),
        exp: moment().add(30, 'days').unix()
    }

    return jwt.encode(payload, secret);
};
