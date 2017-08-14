
let express = require('express');
let bodyParser = require('body-parser');


let app = express();

// Routes
let user_routes = require('./routes/user');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Base Routes
app.use('/api', user_routes);

app.get('/pruebas', function(req, res){
  res.status(200).send({message:" Pagina de bienvenida "});
})


module.exports = app;
