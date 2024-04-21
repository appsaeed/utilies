/**
 * fomrat price | used to calculate strip payment amount
 * @param {string} price
 * @returns
 */
export declare function formatPrice(price: number | string): number;
/**
 * currency code to symbol | help of built-in toLocaleString
 * @param currency currency code
 * @param {string} language language e.g en-US
 * @returns {string}
 */
export declare function currencyToSymbol(currency: string, language: string): string;
/**
 * rgb to hex string
 * @param red
 * @param green
 * @param blue
 */
export declare function rgbToHex(red: number | string, green: number | string, blue: number | string): string;
/**
 * hex string to rgb
 * @param hex string
 */
export declare function hexToRgb(hex: string): {
    red: number;
    green: number;
    blue: number;
} | null;
export declare const base64en: typeof btoa;
export declare const base64de: typeof atob;
export declare const base64encode: typeof btoa;
export declare const base64decode: typeof atob;
