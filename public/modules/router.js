import './vendors/routie.min.js'

import { renderCamera, renderProduct, renderLoading, renderInitial, renderError } from './render.js'
import { getBarcode, endCamera, startCamera } from './getCode.js'
import getData from './getData.js'

export function handleRoutes() {
  routie({
    '': async () => {
      renderInitial()
    },
    'camera': async ()=>{
      renderCamera()
        .then(() => {
          startCamera()
          const btn = document.querySelector('#scan')
          const video = document.querySelector('video')
          // const barcode = getBarcode(video)
          const barcode = 8711400408540 || 737628064502
          btn.addEventListener('click', () => {
            location.href = `#product/${barcode}`
            endCamera()
          })
        })
    },
    'product/:barcode': async (barcode)=>{
      renderLoading()
      const data = await getData(barcode)
      if(data.status === 1){
        renderProduct(await data.product)
      } else {
        renderError('Geen product gevonden')
      }
    }
  })
}