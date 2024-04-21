/**
 * any string to SEO url
 */
export declare function textToSeo(url: string): string;
export declare const toSeoUrl: typeof textToSeo;
export declare const toSeoURL: typeof textToSeo;
/**
 * SEO url to a valid string
 * @param url
 * @returns
 */
export declare function seoToString(url: string): string;
/**
 * url to plain text
 */
export declare const urlToString: typeof seoToString;
export declare const urlToText: typeof seoToString;
/**
 * clean up starting and ending slash from a string
 */
export declare const unSlash: (str: string) => string;
/**
 * clean up starting slash from a string
*/
export declare const unSlashL: (str: string) => string;
export declare const unSlashLeft: (str: string) => string;
/**
 * clean up last slash from a string
*/
export declare const unSlashR: (str: string) => string;
export declare const unSlashEnd: (str: string) => string;
/**
 * add a slash to the url of endpoint
 */
export declare const addSlash: (str: string) => string;
export declare const addSlashs: (str: string) => string;
/**
 * Create base url by using window location object
 * @param {string|string[]} paths
 * @param {string} sp
 * @returns
 */
export declare function home_url(paths?: string[] | string, sp?: string): string;
export declare const base_url: typeof home_url;
export declare const baseURL: typeof home_url;
export declare const homeURL: typeof home_url;
