/**
 * Copy image to clipboard by image url
 * @param {string} url
 * @return {Promise<boolean>}
 */
export declare function copyImageToClipboard(url: string): Promise<boolean>;
/**
 * Image url to convert blob object as an promise
 * @param url
 * @returns
 */
export declare function imageToBlob(url: string): Promise<Blob | null>;
/**
 * copy text to clipboard
 * @param {string} text
 */
export declare function toClipboard(text: string): Promise<unknown>;
/**
 * copy text to clipboard
 * @param {string} text
 * @function toClipboard
 */
export declare const copyToClipboard: typeof toClipboard;
export declare function fallbackToClipboard(text: string): Promise<unknown>;
