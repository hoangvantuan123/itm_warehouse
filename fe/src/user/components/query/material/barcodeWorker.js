// barcodeWorker.js
self.onmessage = (event) => {
    const { barcode } = event.data;
  
    if (barcode) {
      self.postMessage(barcode); 
    }
  };
  