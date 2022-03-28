const express = require('express')
const bodyParser = require('body-parser');

require('dotenv').config();

let port = process.env.PORT || 5555


const app = express()


//Initialise app
app
  .use('/static', express.static('./public'))
  .set('view engine', 'pug')
  .set('views', './server/views')
  .use(bodyParser.urlencoded({ extended: true }))


// Routes
app
  .get('/', (req, res) => {
    res.render('index')
  })
  .get('/camera', (req, res) => {
    res.render('camera')
  })
  .get('/product', (req, res) => {
    res.render('product')
  })

// Start app
app.listen(port, () => {
  console.log('Server started at port ' + port);
});