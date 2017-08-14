'use strict'

function pruebas(req, res){
  res.status(200).send({
    message: 'Proando una accion del controlador del usuario del Application rest'
  })
}

module.exports = {
  pruebas
};
