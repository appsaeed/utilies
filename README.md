## Introduction

JavaScript utility helpers designed to enhance developer experience, increase productivity, and optimize performance. Compatible with both browsers (Node.js with limited support).

> Fast, generic JavaScript utility helpers to boost your project productivity and performance

## Table of Contents
<!-- START -->
- [Installation](#installation) - Easily install and start using
- [Error handling](#error-handling) - Simplify error handling utility functions. 
- [Theme](#theme-detection--management) - Theme detection and management with local storage.
- [Clipboard helpers](#clipboard-helpers) - Copy text/image to clipboard.
- [Conversion](#conversion) - Easily convert various data formats and values.
- [Cookie](#cookie) - Manage browser Cookie with secure encrypted data.
- [Datetime](#datetime) - Convenient functions to convert date and time
- [Detection](#detection) - Detect device theme scheme and browser information
- [Encryption](#encryption) - Simple XOR and window crypto encryption with secret keys
- [Errors](#errors) - Convert errors to strings for display
- [Exporting](#exporting) - Export PDF, document files with client-side JavaScript
- [Generate](#generate) - Generate random strings, numbers, UUIDs, and more
- [Load](#load) - Load DOM elements, images, and more (browsers only)
- [Math](#math) - Simple math calculations for JavaScript applications
- [Storage](#storage) - Local storage and session storage utilities (browsers only)
- [String](#string-manipulation) - Modify strings and remove HTML
- [URL](#url) - Convenient URL/string modification utilities
- [Validation](#validation) - Client-side validation for emails, numbers, forms, etc.
- [Developers](#developers) - Repository maintenance and command scripts
- [License](#license) - MIT License
<!-- FINISHED -->

## Installation

Install with [npm](https://www.npmjs.com/)
```sh
npm install utilies
```

## Theme Detection & Management  

Easily detect, retrieve, and manage theme preferences in your application.


**`themeSchema`** – Detects the device's current theme (`dark` or `light`).
```js
import { themeSchema } from 'utilies'
themeSchema // output: dark or light based on device theme schema
```  

**`isDarkSchema` / `isDark`** – Checks if the device is using a dark theme (`true` or `false`).
```js
import { isDarkSchema, isDark } from 'utilies'
isDarkSchema // output: true or false based on device theme schema
//or
isDark // output: boolean
```  


**`setTheme`** – Saves a preferred theme (`dark` or `light`) to local storage.
```js
import { setTheme } from 'utilies'

setTheme('dark') // save the dark theme to local storage
setTheme('light')
```

**`getTheme` / `theme`** – Retrieves the saved theme from local storage; defaults to system preference if not set.
```js
import { getTheme, theme } from 'utilies'

getTheme() // your saved theme: dark, light, or system
getTheme('my_theme') // with storage key name (optional)
theme // output: dark or light - works the same as getTheme if no storage key is provided
```  

**`themeIs`** – Checks if the current theme matches a specific value (`dark` or `light`).  
```js
import { themeIs, theme } from 'utilies'

themeIs('dark', theme) // true 
themeIs('light', theme) // false 
```





## Error Handling  

Simplify error handling and conversion with these utility functions.  

**`catchOrNull` / `catchOR`** – Wraps a function in a `try-catch` block and prevents exceptions from being thrown. Returns `null` or a custom fallback value if an error occurs.  

```js
import { catchOrNull, catchOR } from 'utilies';

// e.g., catchOrNull(callback, callbackError)

catchOrNull(() => 'Hello World!'); // output: Hello World!

function helloWorld(){
    throw "Server Error";
}

// Will not throw exception error
catchOrNull(helloWorld); // output: null
catchOR(helloWorld, false); // output: false
catchOR(helloWorld, 0); // output: 0

// Get error message 
catchOrNull(helloWorld, function(error){
    console.log('Custom: ', error)
});
```

**`errorToString` / `extractError`** – Converts any error (objects, arrays, or strings) into a readable string.  
**`errorsToString` / `extractErrors`** – Merges multiple errors into a single string for better readability.

```js
// Convert any error to string 
errorToString(['unknown', 'fatal error']) // output: "unknown, fatal error"
// or
extractError(['unknown', 'fatal error']) // output: "unknown, fatal error"

// Extract multiple errors to a single string
errorsToString('error 1', 'error 2') // output: "error 1, error 2"
// or 
extractErrors('error 1', 'error 2') // output: "error 1, error 2"
```  
## Clipboard Helpers  

Easily copy text or images to the clipboard using the **Clipboard API** with a fallback for better browser support.  

**`toClipboard` / `copyToClipboard`** – Copies a given text string to the clipboard.  
**`copyImageToClipboard`** – Copies an image to the clipboard using its URL.  
```js
import { toClipboard } from 'utilies';
// Copy text to clipboard
toClipboard("hello world");
// or 
copyToClipboard("hello world");

// Copy image to clipboard
const imageUrl = "image/examples/image.png";
copyImageToClipboard(imageUrl);
```
For more details, refer to the [Clipboard API documentation](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard).






## Conversion  

A set of functions to easily convert various data formats and values.  

**`currencyToSymbol`** – Converts a currency code (e.g., `USD`) into its corresponding symbol (e.g., `$`).
```js
import { currencyToSymbol } from 'utilies'
currencyToSymbol("USD"); // output: $
```    
**`rgbToHex`** – Converts RGB color values to a HEX color string.
**`hexToRgb`** – Converts a HEX color string into RGB values.  
```js
import { rgbToHex, hexToRgb } from 'utilies';
rgbToHex(10, 20, 100); // output: hex string: #0a1464

hexToRgb("#1a098b"); // output: { red: number, green: number, blue: number } or null
```

**`queryTojson`** – Converts a query string into a JSON object.  
```js
import { queryTojson } from 'utilies';
queryTojson('name=Javascript&ext=js&founder=Brendan Eich');
// output: { name: 'Javascript', ext: 'js', founder: 'Brendan Eich' }
```

**`formatPrice`** – Formats a numerical price value for use with payment gateways like Stripe.
```js
import { formatPrice } from 'utilies'
formatPrice(20.3);
```


## Cookie  

Easily manage client-side cookies in your application. Note: Avoid storing sensitive information in client-side cookies (browsers only).  

- **`setCookie`** – Sets a cookie with a specified name, value, expiration days, and optional path.  
- **`getCookie`** – Retrieves the value of a cookie by name.  
- **`hasCookie`** – Checks if a cookie with the specified name exists (`true` or `false`).  

```js
import { setCookie, getCookie, hasCookie } from 'utilies';

const cookieName = "cookie-name";
const cookieValue = "example_value" // string | object | array | boolean support;
const cookieDays = 30;
const cookiePath = ""; // optional

setCookie(cookieName, cookieValue, cookieDays, cookiePath);
getCookie(cookieName) // output: example_value

hasCookie(cookieName); // output: true or false
```


## Datetime 

Format and manipulate date and time with built-in JavaScript functions and customizable options.  

**`date`** – Formats a date string into a readable date format (e.g., `Mar 28, 23`).
```js
import { date } from 'utilies';

date("2023-03-28 20:04:10"); // output: Mar 28, 23

```
**`dateTime`** – Formats a date string into a readable date and time format (e.g., `Mar 28, 23 08:04 PM`).
```js
import { dateTime } from 'utilies';
dateTime("2023-03-28 20:04:10"); // output: Mar 28, 23 08:04 PM
//or 
datetime("2023-03-28 20:04:10"); // output: Mar 28, 23 08:04 PM
```

**`time`** – Extracts and formats the time portion from a given date string (e.g., `08:04 PM`).  
```js
import { time } from 'utilies';

time("2023-03-28 20:04:10"); // output: 08:04 PM
```

You can customize the output format using options supported by JavaScript's [toLocaleString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString).  

```js
datTime("2023-03-28 20:04:10", options);

const language = 'en-US' // or ['en-US', 'en-GB'];
dateTime("2023-03-28 20:04:10", options, language);
time("2023-03-28 20:04:10", options, language);
date("2023-03-28 20:04:10", options, language);
```


## Detection  

Detect various system and device characteristics for better user experience.  

- **`is_dark`** – Checks if the device is using a dark theme (`true` or `false`).  
- **`deviceTheme`** – Retrieves the current theme of the device (`dark` or `light`).  
- **`systemTheme`** – Retrieves the system theme preference (`dark` or `light`).  
- **`isMobile`** – Detects if the device is a mobile device (`true` or `false`).  
- **`isTouchDevice`** – Detects if the device supports touch input (`true` or `false`).  
```js
// Get device theme schema
console.log(is_dark); // output: true or false

console.log(deviceTheme); // output: dark or light
console.log(systemTheme); // output: dark or light

// Check if device is mobile
console.log(isMobile) // output: true or false

// Detect if touch device
console.log(isTouchDevice) // output: true or false
```


## Encryption  

Easily encrypt and decrypt text in JavaScript applications for both browser and Node.js environments.  

- **`encryptSync`** – Encrypts a given text using a secret key.  
- **`decryptSync`** – Decrypts encrypted text using the same secret key.  
```js
import { encryptSync, decryptSync } from 'utilies';

// Encrypt text using secret key
const encrypted = encryptSync('Hello world!', 'my_secret')
console.log('Encrypted: ', encrypted) // Encrypted: JRwzHwpDBQoGAR1+

// Decrypt text using secret key and encrypted text
const decrypted = decryptSync('JRwzHwpDBQoGAR1+', 'my_secret')
console.log('Decrypted: ', decrypted) // Decrypted: Hello world!
```
#### Advanced Encryption   

Advanced Encryption JavaScript's built-in `crypto` for secure encryption and decryption.  

- **`encrypt`** – Asynchronously encrypts a given text using a secret key.  
- **`decrypt`** – Asynchronously decrypts encrypted text using the same secret key.
```js
import { encrypt, decrypt } from 'utilies';

async function main(){

    const encrypted = await encrypt('Hello world', 'my-secret');

    const data = await decrypt(encrypted, 'my-secret')

    console.log(data) //output: Hello world
}
```



## Exporting
Export to PDF, DOCS (browsers only)
```js
exportToDocs("filename", "Hello world");

exportToPdf("filename", "Hello world", options); // options is optional
/*
options accepted properties:
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
generateToken(10) // output: e.g., GkF25LJxSI

// Generate random number between start and end numbers
random(10, 100) // output: between 10 and 100

// Generate unique ID using crypto 
uniqid() // output: random string
// With specified length
uniqid(10)
// With prefix
uniqid('cg_') // output: cg_omvowejg

// Random string similar to uniqid but without dash
randomString(20, 'cg_') // output: random string e.g., cg_omvowejg

// Generate image URL for avatar by letters
avatar("Javascript"); // output: https://ui-avatars.com/api/?name=Javascript

uuid(); // output: string unique uuid

uuidv1(); // output: string unique uuidv1

uuidv4(); // output: string unique uuidv4
```

## Load
Load/observe images, elements, etc. (browsers only)
```js
// Load image by URL in JavaScript
loadImage("image-url.png").then(function (image) {
    image.classList.add("show-image");
}).catch((err) => {
    console.log('image error: ', err);
});

// Image loads when it comes into view
// The system works efficiently using IntersectionObserver
lazyLoadImage("image-url.png").then(function (image) {
    image.classList.add("show-image");
}).catch((err) => {
    console.log('image error: ', err);
});

// Elements load when they come into view
// The system works efficiently using IntersectionObserver
const elm = document.querySelector("section");
lazyLoadElm(elm).then(function (elm) {
    elm.classList.add("show");
})
.catch((err) => {
    console.log('element load error: ', err);
});

// Check if an element is in the viewport
const element = document.querySelector('#element');
isElementInViewport(element) // output: true when the element is in view
// or 
isViewElm(element) // output: true when the element is in view
```

## Math
Calculate loan interest (browsers / Node.js support)
```js
loanPerMonth(amount, interest, duration); // output: number of loan per month

loanPerYear(amount, interest, duration); // output: number of loan per month

loanPerday(amount, interest, duration); // output: number of loan per month
```

## Storage

**Session storage**
Working with **browser** session storage
```js
setSession("sessionName", "Hello World!");
getSession("sessionName"); // output: "Hello World!"

// Set object and return object
setSession("sessionName", { text: 'Hello'});
getSession("sessionName"); // output: { text: 'Hello'}

// Set number and return number
setSession("sessionName", 120);
getSession("sessionName"); // output: 120

cleanSession("sessionName");
// The session is removed
```

**Local storage**
**Browser** local storage
```js
setStorage("store_name", "Hello World!");
getStorage("store_name"); // output: "Hello World!"

// Set object and return object
setStorage("store_name", { text: 'Hello'});
getStorage("store_name"); // output: { text: 'Hello'}

// Set number and return number
setStorage("store_name", 120);
getStorage("store_name"); // output: 120

cleanStorage("store_name");
// The storage is removed
```

**Theme storage**
Store theme settings using built-in localStorage 
```js
setThemeStore("dark");
getThemeStore(); // output: dark

// Theme storage with custom key name
setThemeStore("light", 'app_theme');
getThemeStore('app_theme'); // output: light
```

## String manipulation

A set of handy functions to simplify string manipulation

**`removeHtml`** – Removes all HTML tags from a string, leaving only the text content.
```js
import { removeHtml } from 'utilies'
// Remove HTML characters from string
removeHtml("<h1>Hello world</h1>"); // output: Hello world
```

**`cssToMillisecond` – Converts CSS time values like `1s` or `100ms` into milliseconds.

```js
import { cssDurationToMillisecond, cssToMillisecond } from 'utilies'

// Convert CSS duration to milliseconds
cssDurationToMillisecond("1s"); // output: 1000
cssDurationToMillisecond("100ms"); // output: 100
// or 
cssToMillisecond('1s'); // output: 1000
```

**`capitalize`** – Capitalizes the first letter of a string while keeping the rest unchanged.  

```js
import { capitalize } from 'utilies'

capitalize("hello"); // output: Hello
capitalize("hi"); // output: Hi
```

## URL
Get home URL (browsers only)
```js
import { url } from "utilies";

// Get home URL (browsers only)
url() // output: http://example.com
url('hello-world') // output: http://example.com/hello-world
url(['hello','world']) // output: http://example.com/hello/world
```

Convert text to SEO-friendly URL and back (browsers / Node.js support) 
```js
// Text to SEO-friendly URL
textToSeo("Hello: I am JavaScript"); // output: hello-i-am-javascript
// or
toSeoUrl("Hello: I am JavaScript"); // output: hello-i-am-javascript

// SEO URL to readable text
seoToString("hello-iam-javascript"); // output: hello i am javascript
// or
seoToText("hello-iam-javascript");  // output: hello i am javascript
// or 
urlToText("hello-iam-javascript")   // output: hello i am javascript
```

Add/remove slashes from a URL (browsers / Node.js support) 
```js
// Add slash to the end of the URL
addSlash("http://example.com"); // output: http://example.com/
addSlash("http://example.com/hello"); // output: http://example.com/hello/
addSlash("example.com/hello"); // output: example.com/hello/

// Add slashes to the start and end of the URL
addSlashs("example.com/hello"); // output: /example.com/hello/
addSlashs("example.com"); // output: /example.com/

// Remove slashes from a string URL

// Remove slashes from the start and end of the URL
unSlash("http://example.com/"); // output: http://example.com
unSlash("/example.com/hello/"); // output: example.com/hello

// Remove slash from the left side of path or URL
unSlashL("/example.com/hello/"); // output: example.com/hello/

// Remove slash from the right side of path or URL
unSlashR("/example.com/hello/"); // output: /example.com/hello
```

**Path/URL join** (supports Node.js & browsers)
```js
pathJoin('example.com', 'hello', false, [], {name: 'Saeed'}, 10) 
// output: example.com/hello/10
pathJoin('example.com', 'hello', false, ['new', 'task'], { name: 'Saeed' }, 10) 
// output: example.com/hello/new/task/10

// urlJoin is an alias for pathJoin
```

Query string parameters to JSON object:
```js
import { queryTojson } from 'utilies';
queryTojson('name=Javascript&ext=js&founder=Brendan Eich');
// output: { name: 'Javascript', ext: 'js', founder: 'Brendan Eich' }
```

## Validation
Validate email, phone number (browsers / Node.js support)
```js
isMail("yourmail@domain.com"); // output: true
isMail("domain.com"); // output: false

isPhoneNumber("abc10832749"); // output: false
isPhoneNumber("10986499204"); // output: true
```

## Other Packages

Discover our best NPM Packages and Vite Plugins that offer user-friendly tools to boost performance and simplify tasks in your Vite-based web development. From streamlining workflows to adding exciting features, find everything you need to take your projects to the next level.
<br>
- [vite-svg](https://github.com/appsaeed/vite-svg) - Vite SVG plugin: effortless SVG import with support for various formats (JSON, raw string, object, etc.).
- [vite-sitemap](https://github.com/appsaeed/vite-sitemap) - This plugin helps create a sitemap in your Vite project.

## Developers
```sh
git clone https://github.com/appsaeed/utilies.git

# TypeScript build
npm run build # test and compile TypeScript
```

## License

Copyright © 2025 [appsaeed](https://appsaeed.github.io)

[MIT](LICENSE)
