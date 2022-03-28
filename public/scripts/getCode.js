import { renderLoading, renderError } from "./render.js";

// Start Camera
export const startCamera = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: true
    });

    // const scanBtn = document.querySelector('#scan')
    const video = document.querySelector('video')

    video.srcObject = await stream
    await video.play()
  } catch(err) {
    console.log(err)
  }
}

// getCode
export const getBarcode = async(video) => {
    if (!('BarcodeDetector' in window)) {
      console.log('Barcode Detector is not supported by this browser.');
    } else {
      const formats = await BarcodeDetector.getSupportedFormats()
      const barcodeDetector = new BarcodeDetector({formats: await formats});
      
      window.setInterval(async () => {
        const barcodes = await barcodeDetector.detect(video);
        if (!barcodes.length <= 0){ 
          console.log(await barcodes[0].rawValue)
          // window.location.hash = '#' + barcodes[0].rawValue;
          return barcodes[0].rawValue
        } else {
          renderError('no barcode detected')
        }
      }, 100)}
}

// Stop Camera
export const endCamera = () => {
  const video = document.querySelector('video')
  const tracks = video.srcObject.getTracks()
      
  tracks.forEach(function(track) {
      track.stop();
  });

  video.srcObject = null
  for (let i = 1; i < 99999; i++)
  window.clearInterval(i);
  console.log('camera stopped')
}