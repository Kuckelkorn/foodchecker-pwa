const express = require('express')
require('dotenv').config();

let port = process.env.PORT || 5555


const app = express()

app.listen(port, () => {
  console.log('Server started at port ' + port);
});