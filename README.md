# ZXing Barcode Scanner Plugin for Cordova
A plugin for Cordova using ZXing library from https://github.com/journeyapps/zxing-android-embedded, exposing a JavaScript interface for scanning barcodes (QR, 1D/2D).

## Barcode formats supported

| 1D product | 1D industrial | 2D
| ---------- | ------------- | --------------
| UPC_A      | CODE_39       | QR_CODE
| UPC_E      | CODE_93       | DATA_MATRIX
| EAN_8      | CODE_128      | PDF_417
| EAN_13     | ITF           |
|            | RSS_14        |
|            | RSS_EXPANDED  |

## Installation

    cordova plugin add cordova-plugin-zxing

## API

### Scan barcode

    window.plugins.zxingPlugin.scan(params, onSuccess, onFailure)

Arguments:

- **params**: All parameters are optional:

    ```javascript
    {
        'prompt_message':'Scan a barcode', // Change the info message
        'orientation_locked':true, // Lock the orientation screen
        'camera_id':0, // Choose the camera source
        'beep_enabled':true, // Enables a beep after the scan
        'barcode_formats':[
            'QR_CODE',
            'CODE_39',
            'CODE_128'], // Put a list of formats that the scanner will find
        'extras':{
            'SCAN_TYPE':2 // Additional extra parameters
        }
    }
    ```

- **onSuccess**: function (s) {...} _Callback for successful scan._
- **onFailure**: function (s) {...} _Callback for cancelled scan or error._

Return:

- success('scanned bar code') _Successful scan with value of scanned code_
- error('cancelled') _If user cancelled the scan (with back button etc)_
- error('misc error message') _Misc failure_


## LICENSE [Apache 2.0](LICENSE.md)

This plugin is released under the Apache 2.0 license
