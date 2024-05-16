## intro
JavaScript utilities helpers to enhance super faster developer experience, productivity, and optimized performance. Compatible with both browsers and limited NodeJS support.

> Fast, generic JavaScript utilities helpers to boost your project productivity and performance


## Overview
jump to a specific section help of this overview

<!-- START -->
-   [Installation](#Installation) Easily install with and start using.
-   [Utility](#Utility) Necessary JavaScript utility functions and methods.
-   [Clipboard](#Clipboard) Copy text/image to clipboard function for browser
-   [Convert](#Convert) Convert price, symbol, string, number etc.
-   [Cookies](#Cookies)  cookies uses secure level encrypted data (only browsers)
-   [Datetime](#Datetime) convience function to convert date and time (comming more..)
-   [Detection](#Detection) detection device theme scheme and browser information etc.
-   [Encryption](#Encryption) simple xor and window crypto encryption with secret key
-   [Errors](#Errors) Errors to string convert to display message 
-   [Exporting](#Exporting) Exportion pdf,docs files with client side javascript
-   [Generate](#Generate) generate random string, randmo number, uuid and much more
-   [Load](#Load) load dom, elements, images and many more functions (only browser)
-   [Math](#Math) simple math calculations in javascript applications 
-   [Storage](#Storage) local storage, session used to get, save data (only browser)
-   [String](#String) remove html from string and modify a string (comming more...)
-   [URL](#URL) modify url/string is very convenient by using this package
-   [Validation](#Validation) validate client side email, number, form field ete.
-   [Author](#Author) Package author details and github page
-   [Developers](#Developers) Developers maintaince repository and command scripts
-   [License](#License) MIT License
<!--FINISHED-->


## Installation
Install with [npm](https://www.npmjs.com/)
```sh
npm i utilies
```
or Install with [yarn](https://www.npmjs.com/package/yarn)
```sh
yarn add utilies
```
or Install with [pnpm](https://www.npmjs.com/package/pnpm)
```sh
pnpm install utilies
```

# Usage
# Other packages

## Utility
Use try-catch in single line 
````js
import { catchOrNull, catchOR } from 'utilies';

//e.g catchOrNull( callback, callbackError )

catchOrNull(()=> 'Hello World!'); //output: Hello World!


function helloWorld(){
    throw "Server Error";
}

//will not throw exception ereror
catchOrNull(helloWorld); //output: null
catchOR(helloWorld, false); //output: false
catchOR(helloWorld, 0); //output: 0

//get error message 
catchOrNull(helloWorld, function(error){
    console.log('Custom: ',error)
});
````
## Clipboard
Copy text/image to clipboard using window navigator [clipboard](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard) or fallback document textarea.
```js
import { toClipboard, copyImageToClipboard } from "utilies";

//copy text to clipboard
toClipboard("hello world");
//or 
copyToClipboard("hello world");


//copy image to clipboard
const imageUrl = "image/examples/image.png";

copyImageToClipboard(imageUrl);
```
## Convert
```js
import { formatPrice, currencyToSymbol } from "utilies";

//formate the prite for payment gateway : stipe or anything else
formatPrice(20.3);

//Currency to symbol
currencyToSymbol("USD"); //output: $
```

[Our online rgb to hex tool](https://appsaeed.github.io/ftools/rgb-to-hex)
**rgbToHex | hexToRgb**

```js
import { rgbToHex } from "utilies";
import { hexToRgb } from "utilies";

rgbToHex(10, 20, 100); //output: hex string: #0a1464

hexToRgb("#1a098b"); //output: { red: number, green: number, blue: number } or  null
```
## Cookies
set cookie only for client side document cookies so please when use client side cookies make sure doesn't have sensitive information (only browsers supports)
```js
import { setCookie , getCookie, hasCookie } from "utilies";

const cookieName = "cookie-name";
const cookieValue = "example_value";
const cookieDays = 30;
const cookiePath = ""; // optional

setCookie(cookieName, cookieValue, cookieDays , cookiePath);
getCookie(cookieName) // output: example_value;

hasCookie(cookieName); //output: true or false;
```
## Datetime
format date/time with your on choose by using js built-in option of [toLocaleString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) (browsers / NodeJS supports)
```js
//common js 
const { toDate } = require('utilies'); // common js required with name import
toDate("2023-03-28 20:04:10"); // output: Mar 28, 23

const utils = require('utilies'); // common js import all
utils.toDate("2023-03-28 20:04:10"); // output: Mar 28, 23

//es6 module import syntax 
import { toDate } from 'utilies'; // es6 name import
toDate("2023-03-28 20:04:10"); // output: Mar 28, 23

import * as utils from "utilies"; // es6 import all
utils.toDate("2023-03-28 20:04:10"); // output: Mar 28, 23
```

```js
import { toDatetime } from "utilies";
import { toDate } from "utilies";
import { toTime } from "utilies";

toDatetime("2023-03-28 20:04:10"); // output: Mar 28, 23 08:04 PM

toDate("2023-03-28 20:04:10"); // output: Mar 28, 23
toTime("2023-03-28 20:04:10"); // output: 08:04 PM

/*
 * custom format for all date functions are same
 * options details https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
 */
toDatetime("2023-03-28 20:04:10", options);

const language = 'en-US' //or ['en-US', 'en-GB'];
toDatetime("2023-03-28 20:04:10", options, language);
toTime("2023-03-28 20:04:10", options, language);
toDate("2023-03-28 20:04:10", options, language);
```
## Detection
Get system theme schema, check is mobile, is touch device etc (browsers)
```js
import { is_dark , isMobile , deviceTheme, systemTheme, isTouchDevice } from "utilies";

//get device theme schema
console.log(is_dark); //output: true or false

console.log(deviceTheme); //output: dark or light
console.log(systemTheme); //output: dark or light

//device is mobile device or not
console.log(isMobile) //output: true or false

//detect is touch device
console.log(isTouchDevice) //output: true or false
```
## Encryption
Use simple encryption in javascript application browser and nodejs environment
````js
import { decryptSync, encryptSync } from 'utilies';

//encrypted text using secret key
const encrypted = encryptSync('Hello world!', 'my_secret')
console.log('Encrypted: ', encrypted)//Encrypted:  JRwzHwpDBQoGAR1+

//decrypted text using secret key and encrypted
const decrypted = decryptSync('JRwzHwpDBQoGAR1+', 'my_secret')
console.log('Decrypted: ', decrypted) //Decrypted:  Hello world!

````
## Errors
Any Errors to string/text (browsers / NodeJS supports)
```js
import { errorToString, errorsToString, extractError,  extractErrors } from "utilies";

//any error to string 
errorToString(['unknow', 'fatal error']) //output: "unknow, fatal error"
//or
extractError(['unknow', 'fatal error']) //output: "unknow, fatal error"

//extract many errors to a string
errorsToString('error 1', 'error 2') //output: "error 1, error 2"
// or 
extractErrors('error 1', 'error 2') //output: "error 1, error 2"
```
## Exporting
Export to pdf, docs (Only browsers supports)
```js
import { exportToPdf } from "utilies";
import { exportToDocs } from "utilies";


exportToDocs("filename", "Hello world");

exportToPdf("filename", "Hello world", options); //options is optional
/*
options accpeted properties
{
    width: 800,
    height: 660,
    top: 100,
    left: 100,
}
*/
```
## Generate
```js
import { random , uniqid , randomString, uuid, uuidv1, uuidv4, avatar } from "utilies";

//generate random number between start number to end number
random(10, 100)//output: between 10, 100

//generate unique id by crypto 
uniqid() //output: random string
//with length
uniqid(10)
//with prefix
uniqid('cg_') //output: cg_omvowejg

//random string similar to uniqid but without dash
randomString(20, 'cg_') //output: random string e.g cg_omvowejg

//generate image url for avatar by latters
avatar("Javascript"); //output:https://ui-avatars.com/api/?name=Javascripts

uuid(); //output: string unique uuid

uuidv1(); //output: string unique uuidv1

uuidv4(); //output: string unique uuidv4
```
## Load
Load/observer images, elements etc (Only browsers supports)
```js
import { loadImage , lazyLoadImage , lazyLoadElm, isElementInViewport } from "utilies";

//load image by url in javascript
loadImage("image-url.png").then(function (image) {
    image.classList.add("show-image");
}).catch((err)=> {
    console.lor('imge error: ', err);
});

//image load will be completes when it gose to view
//The system work efficiently by using under IntersectionObserver
lazyLoadImage("image-url.png").then(function (image) {
    image.classList.add("show-image");
}).catch((err)=> {
    console.lor('imge error: ', err);
});


//elements load will be completes when it gose to view
//The system work efficiently by using under IntersectionObserver
const elm = document.queySelector("section");
lazyLoadElm(elem).then(function (elm) {
    elm.classList.add("show");
})
.catch((err)=> {
    console.lor('element load error: ', err);
});



//When a element is in the viewport
const element = document.querySelector('#element');
isElementInViewport(element) //output: true when the element is in view
//or 
isViewElm(element) //output: true when the element is in view
```
## Math
Loan interest calculate (browsers / NodeJS supports)
```js
import {loanPerMonth, loanPerYear , loanPerday } from "utilies";

loanPerMonth(amount, interest, duration); //output: number of loan per month

loanPerYear(amount, interest, duration); //output: number of loan per month

loanPerday(amount, interest, duration); //output: number of loan per month
```
## Storage

**Session storage**
working with **browser** session storage
```js
import { getSession, setSession, removeSession } from "utilies";

setSession("sessionName", "Hello World!");
getSession("sessionName");// output: "Hello World!"

//set object and return object
setSession("sessionName", { text: 'Hello'});
getSession("sessionName");// output: { text: 'Hello'}

//set number and return number
setSession("sessionName", 120);
getSession("sessionName");// output: 120

cleanSession("sessionName");
// The session is removed
```

**local storage**
**browser** local storage
```js
import { setStorage, setSession, removeSession } from "utilies";

setStorage("store_name", "Hello World!");
getStorage("store_name");// output: "Hello World!"

//set object and return object
setStorage("store_name", { text: 'Hello'});
getStorage("store_name");// output: { text: 'Hello'}

//set number and return number
setStorage("store_name", 120);
getStorage("store_name");// output: 120

cleanStorage("store_name");
// The session is removed
```

**themeStorage**
The theme store using built-in localStorage 
```js
import { setThemeStore, getThemeStore } from "utilies";

setThemeStore("dark");

getThemeStore(); // output: dark

//theme storage with key name defined
setThemeStore("light", 'app_theme');

getThemeStore('app_theme'); // output: light
```
## String
Modify a string, html string tags to valid text etc (browsers/NodeJS supports)
```js
import { removeHtml, cssDurationToMillisecond } from "utilies";

//remove html characters from string
removeHtml("<h1>Hello world</h1>"); // output: Hello world


//css duration to milliseconds
cssDurationToMillisecond("1s"); // output: 1000
cssDurationToMillisecond("100ms"); // output: 100
//or 
cssToMillisecond('1s'); // output: 1000
```
## URL
Get Home/base url (only browsers support)
```js
import { home_url, homeURL , base_url, baseURL , urlToText } from "utilies";

//Get home url only browser support
home_url() //output: http://example.com
home_url(  'hello-world'  ) //output: http://example.com/hello-world
home_url(['hello','world']) //output: http://example.com/hello-world

//separator by default: /
home_url(['hello','world'] , '/') //output: http://example.com/hello/world
home_url(['hello','world'] , '_') //output: http://example.com/hello_world

homeURL(); //output: http://example.com
baseURL(); //output: http://example.com
base_url();//output: http://example.com
// home_url, homeURL, base_url, baseURL - all are some
```
Get text to seo url and seo url to text (browsers / NodeJS supports) 
```js
import { textToSeo, toSeoUrl, seoToString , seoToText , urlToText } from "utilies";

// text to seo friendly url
textToSeo("Hello: I am javascript"); //output: hello-i-am-javascript
//or
toSeoUrl("Hello: I am javascript"); //output: hello-i-am-javascript

//seo url to valid text
seoToString("hello-iam-javascript"); //output: hello i am javascript
//or
seoToText("hello-iam-javascript");  //output: hello i am javascript
//or 
urlToText("hello-iam-javascript")   //output: hello i am javascript
```
Add/remove slash from a url (browsers / NodeJS supports) 
```js
import { textToSeo,toSeoUrl, seoToString, unSlash, unSlashR, unSlashL } from "utilies";

//add slash end of the url
addSlash("http://example.com"); //output: http://example.com/

addSlash("http://example.com/hello"); //output: http://example.com/hello/

addSlash("example.com/hello"); //output: example.com/hello/

//add slash to start and end of the url
addSlashs("example.com/hello"); //output: /example.com/hello/
addSlashs("example.com"); //output: /example.com/

//remove slashes from a string url

//remove slash from a url start and end of the url
unSlash("http://example.com/"); //output: http://example.com

unSlash("/example.com/hello/"); //output: example.com/hello

//remove slash from left side of path or url
unSlashL("/example.com/hello/"); //output: example.com/hello/

//remove slash from right side of path or url
unSlashR("/example.com/hello/"); //output: /example.com/hello
```
## Validation
Validate email, phone number (browsers / NodeJS supports)
```js
import { isMail, isPhoneNumber } from "utilies";

isMail("yourmail@domain.com"); //ouput: true
isMail("domain.com"); //output: false

isPhoneNumber("abc10832749"); //output: false

isPhoneNumber("10986499204"); //output: true
```
## Author
**Saeed Web Developer**

-   [website](https://appsaeed.github.io)
-   [Linkden](https://www.linkedin.com/in/appsaeed)
-   [email](appsaeed7@gmail.com)
## Developers
```sh
git clone https://github.com/appsaeed/utilies.git

# TypeScript build
npm run build # test and compile typeScript
```
## License

Copyright © 2023 [appsaeed](https://appsaeed.github.io)

[MIT](LICENSE)
