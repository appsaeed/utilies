export declare class Crypte {
    #private;
    constructor(secret: string);
    generateKeyFromSecret(): Promise<CryptoKey>;
    deriveKeyFromSecret(): Promise<CryptoKey>;
    encrypt(data: string): Promise<string>;
    decrypt(encrypted: string): Promise<string>;
}
export declare class XorCrypto {
    #private;
    /**
   * secret key set to encrypt and decrypt with secure layer
   * @param secret key to set in secret cookie
   */
    setkey(secret: string): this;
    /**
     * Generates key as a string to be work with encrypted and decrypted
     * @param {string} key secret key to generate key
     */
    protected generateKey(key: string): string;
    /**
     * Encrypt a string using secure encryption key as xor one secure layer
     * @param {string} text text for the generated encryption version
     * @param {string} secret secret key to protect encryption text
     * @returns {string} encrypted text
     */
    encrypt(text: string, secret?: string): string;
    /**
    * Decrypt a string from encrypted text with a secure layer as key as pair
    * @param {string} text text for the generated encryption version
    * @param {string} secret secret key to protect encryption text
    * @returns {string} encrypted text
    */
    decrypt(text: string, secret?: string): string;
}
export declare const encryptSync: (text: string, secret?: string) => string;
export declare const decryptSync: (text: string, secret?: string) => string;
