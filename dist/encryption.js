var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Crypte_secret, _XorCrypto_secret;
export class Crypte {
    constructor(secret) {
        _Crypte_secret.set(this, void 0);
        __classPrivateFieldSet(this, _Crypte_secret, secret, "f");
    }
    generateKeyFromSecret() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const secretBuffer = new TextEncoder().encode(__classPrivateFieldGet(this, _Crypte_secret, "f"));
                return yield window.crypto.subtle.importKey("raw", secretBuffer, { name: "PBKDF2" }, false, ["deriveBits", "deriveKey"]);
            }
            catch (error) {
                throw error;
            }
        });
    }
    // Function to derive a key from a secret
    deriveKeyFromSecret() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const keyMaterial = yield this.generateKeyFromSecret();
                return yield window.crypto.subtle.deriveKey({
                    "name": "PBKDF2",
                    "salt": new Uint8Array(0), // No salt used
                    "iterations": 100000,
                    "hash": "SHA-256"
                }, keyMaterial, { "name": "AES-GCM", "length": 256 }, true, ["encrypt", "decrypt"]);
            }
            catch (error) {
                throw error;
            }
        });
    }
    // Function to encrypt a string using a secret
    encrypt(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const encryptionKey = yield this.deriveKeyFromSecret();
                const encodedData = new TextEncoder().encode(data);
                const encryptedData = yield window.crypto.subtle.encrypt({ name: "AES-GCM", iv: new Uint8Array(12) }, encryptionKey, encodedData);
                // Convert the encrypted data to a base64 string for safe representation
                const encryptedString = Array.from(new Uint8Array(encryptedData)).map(byte => String.fromCharCode(byte)).join('');
                return encodeURIComponent(btoa(encryptedString)); // Encode to ensure it's a valid string 
            }
            catch (error) {
                throw error;
            }
        });
    }
    // Function to decrypt a string using a secret
    decrypt(encrypted) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const decryptionKey = yield this.deriveKeyFromSecret();
                // Decode and parse the encrypted string
                const decodedEncryptedData = atob(decodeURIComponent(encrypted));
                // Convert the base64 string back to a Uint8Array for decryption
                const encryptedDataArray = Uint8Array.from(decodedEncryptedData, char => char.charCodeAt(0));
                const decryptedData = yield globalThis.crypto.subtle.decrypt({
                    name: "AES-GCM",
                    iv: new Uint8Array(12)
                }, decryptionKey, encryptedDataArray);
                return new TextDecoder().decode(decryptedData);
            }
            catch (error) {
                throw error;
            }
        });
    }
}
_Crypte_secret = new WeakMap();
export class XorCrypto {
    constructor() {
        _XorCrypto_secret.set(this, 'm^Ul8Y1qGpPO-#9j;Gt2KEDF8P@btDHYIC01T');
    }
    /**
   * secret key set to encrypt and decrypt with secure layer
   * @param secret key to set in secret cookie
   */
    setkey(secret) {
        __classPrivateFieldSet(this, _XorCrypto_secret, secret, "f");
        return this;
    }
    /**
     * Generates key as a string to be work with encrypted and decrypted
     * @param {string} key secret key to generate key
     */
    generateKey(key) {
        let generatedKey = '';
        const keyLength = key.length;
        for (let i = 0; i < keyLength; i++) {
            generatedKey += String.fromCharCode(key.charCodeAt(i) % 256);
        }
        return generatedKey;
    }
    /**
     * Encrypt a string using secure encryption key as xor one secure layer
     * @param {string} text text for the generated encryption version
     * @param {string} secret secret key to protect encryption text
     * @returns {string} encrypted text
     */
    encrypt(text, secret = __classPrivateFieldGet(this, _XorCrypto_secret, "f")) {
        const generatedKey = this.generateKey(secret);
        let result = '';
        for (let i = 0; i < text.length; i++) {
            result += String.fromCharCode(text.charCodeAt(i) ^ generatedKey.charCodeAt(i % secret.length));
        }
        return btoa(result); // Encode the result to Base64
    }
    /**
    * Decrypt a string from encrypted text with a secure layer as key as pair
    * @param {string} text text for the generated encryption version
    * @param {string} secret secret key to protect encryption text
    * @returns {string} encrypted text
    */
    decrypt(text, secret = __classPrivateFieldGet(this, _XorCrypto_secret, "f")) {
        try {
            const generatedKey = this.generateKey(secret);
            let result = '';
            const decodedData = atob(text); // Decode Base64
            for (let i = 0; i < decodedData.length; i++) {
                result += String.fromCharCode(decodedData.charCodeAt(i) ^ generatedKey.charCodeAt(i % secret.length));
            }
            return result;
        }
        catch (error) {
            throw new Error('Error decrypting: cannot decrypt, please make sure you have correct key and encrypted text');
        }
    }
}
_XorCrypto_secret = new WeakMap();
export const encryptSync = new XorCrypto().encrypt.bind(XorCrypto);
export const decryptSync = new XorCrypto().decrypt.bind(XorCrypto);
