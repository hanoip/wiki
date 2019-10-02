const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const models = require('./models');
const routes = require('./routes');  //toma el index por convencion
var user = require('./models/User');
var page = require('./models/Page');
app.use(bodyParser.urlencoded({ extended: true })); // para HTML form submits
app.use(bodyParser.json());

var env = nunjucks.configure('views', { noCache: true });
// hace res.render funcionar con archivos html
app.set('view engine', 'html');
// cuando res.render funciona con archivos html, haz que use nunjucks para eso.
app.engine('html', nunjucks.render);


models.db.sync({ force: false })
  .then(function () {
    // asegurate de reemplazar el nombre de abajo con tu app de express
    app.listen(3001, function () {
      console.log('Server is listening on port 3001!');
    });
  })
  .catch(console.error);


// app.listen(3000, () => {
//   console.log`entrando al puerto 3000`
// });

app.use(express.static('public'));

app.use('/', (req, res, next) => {
  console.log`recibi un request`;
  next();
});
app.use('/', routes);

