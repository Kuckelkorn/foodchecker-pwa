const express = require('express')
const path = require('path')

require('dotenv').config();

let port = process.env.PORT || 5555


const app = express()


app.use('/static', express.static(path.join(__dirname, 'public')))


// Routes
app
  .get('/', )

app.listen(port, () => {
  console.log('Server started at port ' + port);
});