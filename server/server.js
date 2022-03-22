const express = require('express')
const bodyParser = require('body-parser');

require('dotenv').config();

let port = process.env.PORT || 5555


const app = express()


//Initialise app
app
  .use('/static', express.static('./public/static'))
  .set('view engine', 'pug')
  .set('views', './server/views')
  .use(bodyParser.urlencoded({ extended: true }))


// Routes
app
  .get('/', )

// Start app
app.listen(port, () => {
  console.log('Server started at port ' + port);
});