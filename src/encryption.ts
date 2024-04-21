export class Crypte {

    #secret: string;

    constructor(secret: string) {
        this.#secret = secret;
    }

    async generateKeyFromSecret(): Promise<CryptoKey> {
        try {
            const secretBuffer = new TextEncoder().encode(this.#secret);
            return await window.crypto.subtle.importKey(
                "raw",
                secretBuffer,
                { name: "PBKDF2" },
                false,
                ["deriveBits", "deriveKey"]
            );
        } catch (error) {
            throw error;
        }
    }

    // Function to derive a key from a secret
    async deriveKeyFromSecret(): Promise<CryptoKey> {
        try {
            const keyMaterial = await this.generateKeyFromSecret();
            return await window.crypto.subtle.deriveKey(
                {
                    "name": "PBKDF2",
                    "salt": new Uint8Array(0), // No salt used
                    "iterations": 100000,
                    "hash": "SHA-256"
                },
                keyMaterial,
                { "name": "AES-GCM", "length": 256 },
                true,
                ["encrypt", "decrypt"]
            );
        } catch (error) {
            throw error
        }
    }

    // Function to encrypt a string using a secret
    async encrypt(data: string): Promise<string> {
        try {
            const encryptionKey = await this.deriveKeyFromSecret();
            const encodedData = new TextEncoder().encode(data);
            const encryptedData = await window.crypto.subtle.encrypt({ name: "AES-GCM", iv: new Uint8Array(12) }, encryptionKey, encodedData);
            // Convert the encrypted data to a base64 string for safe representation
            const encryptedString = Array.from(new Uint8Array(encryptedData)).map(byte => String.fromCharCode(byte)).join('');
            return encodeURIComponent(btoa(encryptedString)); // Encode to ensure it's a valid string 
        } catch (error) {
            throw error;
        }
    }

    // Function to decrypt a string using a secret
    async decrypt(encrypted: string): Promise<string> {
        try {
            const decryptionKey = await this.deriveKeyFromSecret();
            // Decode and parse the encrypted string
            const decodedEncryptedData = atob(decodeURIComponent(encrypted));
            // Convert the base64 string back to a Uint8Array for decryption
            const encryptedDataArray = Uint8Array.from(decodedEncryptedData, char => char.charCodeAt(0));
            const decryptedData = await globalThis.crypto.subtle.decrypt({
                name: "AES-GCM",
                iv: new Uint8Array(12)
            }, decryptionKey, encryptedDataArray);

            return new TextDecoder().decode(decryptedData);
        } catch (error) {
            throw error;
        }
    }

}

export class XorCrypto {

    #secret = 'm^Ul8Y1qGpPO-#9j;Gt2KEDF8P@btDHYIC01T';

    /**
   * secret key set to encrypt and decrypt with secure layer
   * @param secret key to set in secret cookie
   */
    public setkey(secret: string) {
        this.#secret = secret;
        return this;
    }

    /**
     * Generates key as a string to be work with encrypted and decrypted
     * @param {string} key secret key to generate key
     */
    protected generateKey(key: string): string {
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
    public encrypt(text: string, secret: string = this.#secret): string {
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
    public decrypt(text: string, secret: string = this.#secret): string {
        try {
            const generatedKey = this.generateKey(secret);
            let result = '';
            const decodedData = atob(text); // Decode Base64
            for (let i = 0; i < decodedData.length; i++) {
                result += String.fromCharCode(decodedData.charCodeAt(i) ^ generatedKey.charCodeAt(i % secret.length));
            }
            return result;
        } catch (error) {
            throw new Error('Error decrypting: cannot decrypt, please make sure you have correct key and encrypted text')
        }
    }
}


export const encryptSync = new XorCrypto().encrypt.bind(XorCrypto);
export const decryptSync = new XorCrypto().decrypt.bind(XorCrypto);
