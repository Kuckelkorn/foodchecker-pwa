const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true
      });
      
      const video = document.querySelector('video')
      video.srcObject = await stream
      await video.play()

      const btn = document.querySelector('#scan')
      btn.addEventListener('click', (e) => {
        e.preventDefault()
        // const barcode = getBarcode(video)
        const barcode = 8711400408540 || 737628064502
        location.href = `/product/${barcode}`
        endCamera()
      })
    } catch(err) {
      console.log(err)
    }
}


const getBarcode = async(video) => {
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
        console.log('no barcode detected')
      }
    }, 100)}
}

const endCamera = () => {
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


startCamera()