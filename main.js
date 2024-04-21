import { decryptSync, encryptSync } from './dist/encryption.js';

//encrypted text using secret key
const encrypted = encryptSync('Hello world!', 'my_secret')
console.log('Encrypted: ', encrypted)//Encrypted:  JRwzHwpDBQoGAR1+

//decrypted text using secret key and encrypted
const decrypted = decryptSync('JRwzHwpDBQoGAR1+', 'my_secret')
console.log('Decrypted: ', decrypted) //Decrypted:  Hello world!
