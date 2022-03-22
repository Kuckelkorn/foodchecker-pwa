import { handleRoutes } from "./modules/router.js"

const noJS = document.querySelector('#nojs')
const initial = document.querySelector('#initial')

noJS.classList.add('hidden')
initial.classList.remove('hidden')

handleRoutes();