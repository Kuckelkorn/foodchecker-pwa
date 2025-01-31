import express from 'express';
import bodyParser from 'body-parser'
import fetch from 'node-fetch'
import 'dotenv/config'
import compression from 'compression'

let port = process.env.PORT || 5555


const app = express()

const setCache = (req, res, next) => {
  const period = 183 * 24 * 60 * 60 

  if (req.method == 'GET') {
    res.set('Cache-control', `public, max-age=${period}`)
  } else {
    res.set('Cache-control', `no-store`)
  }
  next()
}

//Initialise app
app
  .use(setCache)
  .use(express.static('public'))
  .use(compression())
  .set('view engine', 'pug')
  .set('views', './server/views')
  .use(bodyParser.urlencoded({ extended: true }))



// Routes
app
  .get('/', (req, res) => {
    res.render('index')
  })
  .get('/offline', (req, res) => {
    res.render('offline')
  })
  .get('/camera', (req, res) => {
    res.render('camera')
  })
  .post('/camera', (req, res) => {
    const barcode = req.body.barcode
    res.redirect(`/product/${barcode}`)
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
