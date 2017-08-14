'use strict'

let mongoose = require('mongoose');

let app = require('./app');

mongoose.connect('mongodb://localhost:27017/spoti',
  (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log("La conexión a la bd esta corriendo correctamente...");
    }
  });

app.listen(3000);
console.log('Listening on port 3000!');
