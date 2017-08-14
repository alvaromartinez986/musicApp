'use strict'

let bcrypt = require('bcrypt-nodejs')
let User = require('../models/user');

function pruebas(req, res){
  res.status(200).send({
    message: 'Proando una accion del controlador del usuario del Application rest'
  })
}

function saveUser(req, res){
  let user = new User();

  let params = req.body;

    console.log(params);

  user.name = params.name;
  user.surname = params.surname;
  user.email = params.email;
  user.role = 'ROLE_USER';
  user.image = 'null';

  if(params.password){

    bcrypt.hash(params.password, null, null, function(err, hash){
      user.password = hash;
      if(user.name!=null && user.surname != null && user.email!= null){
        user.save((err, userStored)=>{
          if(err){
            res.status(500).send({
              message: "Error al guardar el usuario"
            });
          }else{
            if(!userStored){
              res.status(404).send({
                message: "No se ha registrado el usuario"
              });
            }else{
              res.status(200).send({
                user: userStored,
                message: "Usuario creado correctamente"
              });
            }
          }
        });
      }else {
        res.status(200).send({
          message: "Introduce todos los campos"
        });
      }
    });

  }else {
    res.status(200).send({
      message: "Introduzca contraseña"
    });
  }
}

module.exports = {
  pruebas,
  saveUser
};
