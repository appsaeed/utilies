## intro
JavaScript utilities helpers to enhance super faster developer experience, productivity, and optimized performance. Compatible with both browsers and limited NodeJS support.

> Fast, generic JavaScript utilities helpers to boost your project productivity and performance


## Overview

<!-- START -->

-   [Installation](#install) Easily install with npm, pnpm or yarn and start using.
-   [clipboard](#clipboard) JavaScript clipboard function for browser
-   [errors](#errors) Extract errot to string for browser and nodejs
-   [convert](#convert) convert utility string number etc.
-   [cookies](#cookies) This cookies only works client side javascript
-   [datetime](#datetime) convience function to convert date and time (comming more..)
-   [detection](#detection) detection device theme scheme and browser information
-   [exportion](#exportion) export pdt or doc file with client side javascript
-   [generate](#generate) generate random number uuid and much more
-   [load](#load) load utilites functions such as image,url , document
-   [storage](#storage) browser local storage or session management
-   [str](#string) string utilies some functions  to rmeove and add letters
-   [url](#url) manage url to string and string to url is very convenient
-   [math](#math) simple math calculations for web applications 
-   [validation](#validation) validate client side email, number ete.
-   [author](#author) project author details and github page
-   [license](#license) license

<!--FINISHED-->

## Install

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

## clipboard

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

## Errors
Errors parsing to string
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

## convert
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

## cookies

**setCookie**
set cookie only for client side document cookies so please when use client side cookies make sure doesn't have sensitive information
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

## Exportion

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
avatar("Javascript"); //output:https://ui-avatars.com/api/?name=Javascript


uuid(); //output: string unique uuid

uuidv1(); //output: string unique uuidv1

uuidv4(); //output: string unique uuidv4

```

## Load

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

## Storage

**Session storage**

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

```js
import { setThemeStore, getThemeStore } from "utilies";

setThemeStore("dark");

getThemeStore(); // output: dark

//theme storage with key name defined
setThemeStore("light", 'app_theme');

getThemeStore('app_theme'); // output: light
```

## String

```js
import { removeHtml, cssDurationToMillisecond } from "utilies";

//remove html characters from string
removeHtml("<h1>Hello world</h1>"); // output: Hello world


//css duration to milliseconds
cssDurationToMillisecond("1s"); // output: 1000
cssDurationToMillisecond("100ms"); // output: 100
```

## url

```js
import { toSeoUrl, seoToString, unSlash, unSlashR, unSlashL } from "utilies";
import { home_url, homeURL , base_url, baseURL } from "utilies";

//Get home url only browser support
home_url() //output: http://example.com
home_url('hello-world') //output: http://example.com/hello-world
home_url(['hello','world']) //output: http://example.com/hello/world

//separator default: /
home_url(['hello','world'] , '_') //output: http://example.com/hello_world
home_url(['hello','world'] , '-') //output: http://example.com/hello-world
// home_url, homeURL, base_url, baseURL - all are some

// text to SEO url
toSeoUrl("Hello: I am javascript"); //output: hello-i-am-javascript

//SEO url to string
seoToString("hello-iam-javascript"); //output: hello i am javascript
//or 
urlToString("hello-iam-javascript") //output: hello i am javascript

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


## Math

```js
import {loanPerMonth, loanPerYear , loanPerday } from "utilies";


loanPerMonth(amount, interest, duration); //output: number of loan per month

loanPerYear(amount, interest, duration); //output: number of loan per month

loanPerday(amount, interest, duration); //output: number of loan per month

```

## validation

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
npm run build

# publish to npm package
npm run upload
```

## License

Copyright © 2023 [appsaeed](https://appsaeed.github.io)

[MIT](LICENSE)
