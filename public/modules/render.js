// import { getBarcode, scanCode } from "./getCode.js"


export const renderInitial = () => {
  const camera = document.querySelector('#camera')
  const footer = document.querySelector('footer')
  const initial = document.querySelector('#initial')
  const productInfo = document.querySelector('#product')

  productInfo.classList.add('hidden')
  camera.classList.add('hidden')
  initial.classList.remove('hidden')
  footer.classList.remove('hidden')
}

export const renderCamera = async () => {
  const camera = document.querySelector('#camera')
  const title = document.querySelector('header')
  const footer = document.querySelector('footer')
  const initial = document.querySelector('#initial')
  const productInfo = document.querySelector('#product')

  productInfo.classList.add('hidden')
  camera.classList.remove('hidden')
  initial.classList.add('hidden')
  footer.classList.add('hidden')

  // Changing the HTML 
  title.innerHTML = "<h1>Foodchecker</h1>"

  camera.innerHTML = " "
  camera.insertAdjacentHTML("afterbegin",`<form>
      <video autoplay></video>
      <a id="scan">Scan</a>
    </form>`)
}

export const renderProduct = (product) => {
    const footer = document.querySelector('footer')
    const header = document.querySelector('header')
    const camera = document.querySelector('#camera')
    const initial = document.querySelector('#initial')

    const productInfo = document.querySelector('#product')
    const nutritionInfo = document.querySelector('h2:first-child')
    const allergiesInfo = document.querySelector('h2:last-child')

    // Filter necessary items
    const title =  product.product_name
    const productName = product.generic_name
    // const nutrition =  product.nutriscore_data // OBJECT
    const allergies =  product.allergens_hierarchy // ARRAY
    const picture = product.selected_images.front.display

    console.log(picture)
  
    camera.classList.add('hidden')
    initial.classList.add('hidden')
    productInfo.classList.remove('hidden')
    footer.classList.remove('hidden')
  
    // Changing the HTML with the API data
    header.innerHTML = `<h1>${title}</h1><p>${productName}</p>`

    productInfo.insertAdjacentHTML("afterbegin", `<img src=${picture.es} alt="product foto">`)
    // nutritionInfo.insertAdjacentHTML("afterbegin", `<h3>Score: ${nutrition.grade}</h3>`)
    allergiesInfo.insertAdjacentHTML("afterend", `<p>${allergies}</p>`)
}

export const renderLoading = async() => {
  // const main = document.querySelector('.active')
  // const title = document.querySelector('header')

  // // Changing the HTML 
  // title.innerHTML = "<h1>Foodchecker</h1>"
  // main.innerHTML = `<canvas id="canvas" width="320" height="240"></canvas>`

  // const canvas = document.querySelector('canvas')

  // canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)
  // scanCode(canvas)
}

export const renderError = async (message) => {
  console.log(message)
  const main = document.querySelector('.active')
  const title = document.querySelector('header')
  const footer = document.querySelector('footer')

  footer.classList.remove('hidden')

  // Changing the HTML 
  title.innerHTML = "<h1>Foodchecker</h1>"
  const p = document.createElement("p")
  main.appendChild(p).textContent = message
}