/**
 * any string to SEO url
 */
export function textToSeo(url: string): string {
    return url
        .toString()
        .replace(/[\u0300-\u036f]/g, "") // Remove illegal characters
        .replace(/\s+/g, "-") // Change whitespace to dashes
        .toLowerCase() // Change to lowercase
        .replace(/&/g, "-and-") // Replace ampersand
        .replace(/[^a-z0-9\\-]/g, "") // Remove anything that is not a letter, number or dash
        .replace(/-+/g, "-") // Remove duplicate dashes
        .replace(/^-*/, "") // Remove starting dashes
        .replace(/-*$/, ""); // Remove trailing dashes
}
export const toSeoUrl = textToSeo;
export const toSeoURL = textToSeo;

/**
 * SEO url to a valid string
 * @param url
 * @returns
 */
export function seoToString(url: string): string {
    return url
        .toString() // Convert to string
        .replace("-", " ") // Change whitespace to dashes
        .toLowerCase() // Change to lowercase
        .replace("-and-", " and ") // Replace ampersand
        .replace(/-+/g, " ") // Remove duplicate dashes
        .replace(/^-*/, "") // Remove starting dashes
        .replace(/-*$/, "")
        .trim(); // Remove trailing dashes
}

/**
 * url to plain text
 */
export const urlToString = seoToString;
export const urlToText = seoToString;


/**
 * clean up starting and ending slash from a string
 */
export const unSlash = (str: string): string => str.replace(/(\/$)|(^\/)/g, "");

/**
 * clean up starting slash from a string
*/
export const unSlashL = (str: string): string => str.replace(/(^\/)/, "");
export const unSlashLeft = unSlashL;
/**
 * clean up last slash from a string
*/
export const unSlashR = (str: string): string => str.replace(/(\/$)/g, "");
export const unSlashEnd = unSlashR;

/**
 * add a slash to the url of endpoint
 */
export const addSlash = (str: string): string => unSlash(str).replace(/$/, "/");
export const addSlashs = (str: string): string => str.replace(/(\/$)|(^\/)/g, "");

/**
 * Create base url by using window location object
 * @param {string|string[]} paths 
 * @param {string} sp 
 * @returns 
 */
export function home_url(paths?: string[] | string, sp: string = '-'): string {
    const base_url = location.protocol + '//' + location.host;
    if (Array.isArray(paths)) {
        return base_url + '/' + paths.map(unSlash).join(sp);
    } else if (paths && typeof paths === 'string') {
        return base_url + '/' + unSlash(paths);
    } else {
        return base_url;
    }
}

export const base_url = home_url;
export const baseURL = home_url;
export const homeURL = home_url;