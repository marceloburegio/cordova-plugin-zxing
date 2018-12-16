# ZXing Barcode Scanner Plugin for Cordova
A plugin for Cordova using ZXing library from https://github.com/journeyapps/zxing-android-embedded, exposing a JavaScript interface for scanning barcodes (QR, 1D/2D).

This library enables an inverted scan, enabling scan on dark background with white patterns.

Works only on Android devices.


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
        'prompt_message':'Scan a barcode', // Change the info message. A blank message ('') will show a default message
        'orientation_locked':true, // Lock the orientation screen
        'camera_id':0, // Choose the camera source
        'beep_enabled':true, // Enables a beep after the scan
        'scan_type':'normal', // Types of scan mode: normal = default black with white background / inverted = white bars on dark background / mixed = normal and inverted modes
        'barcode_formats':[
            'QR_CODE',
            'CODE_39',
            'CODE_128'], // Put a list of formats that the scanner will find. A blank list ([]) will enable scan of all barcode types
        'extras':{} // Additional extra parameters. See [ZXing Journey Apps][1] IntentIntegrator and Intents for more details
    }
    ```

- **onSuccess**: function (s) {...} _Callback for successful scan._
- **onFailure**: function (s) {...} _Callback for cancelled scan or error._

Return:

- success('scanned bar code') _Successful scan with value of scanned code_
- error('cancelled') _If user cancelled the scan (with back button etc)_
- error('misc error message') _Misc failure_


## LICENSE [Apache License 2.0](LICENSE.md)

This plugin is released under the [Apache License 2.0][2]

    Copyright 2012-2018 ZXing authors, Journey Mobile, Marcelo Buregio
    
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
    
        http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.


[1]: https://github.com/journeyapps/zxing-android-embedded
[2]: http://www.apache.org/licenses/LICENSE-2.0