import express from 'express';
import bodyParser from 'body-parser'
import fetch from 'node-fetch'
import 'dotenv/config'

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
  .get('/product/:barcode', async (req, res) => {
    const barcode = req.params.barcode
    const result = await fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
    const product = await result.json()
    res.render('product', await product)
  })

// Start app
app.listen(port, () => {
  console.log('Server started at port ' + port);
});