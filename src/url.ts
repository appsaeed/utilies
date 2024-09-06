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
export const slugToText = seoToString;

export const beString = (str: any): string => String(str);

/**
 * clean up starting and ending slash from a string
 */
export const unSlash = (str: string): string => beString(str).replace(/(\/$)|(^\/)/g, "");

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
export const addSlashs = (str: string): string => unSlash(str).replace(/(\/$)|(^\/)/g, "/");


export function pathArrayToString(path: string | string[]) {
    if (Array.isArray(path)) {
        return path.filter(Boolean)
            .filter(text => text != '')
            .filter(text => typeof text === "string" || typeof text === "number")
            .map(unSlash)
            .join("/").toString();
    }
    return path;
}

/**
 * string path joing 
 * @param paths
 */
export function pathJoin(...paths: any[]): string {
    return [...paths]
        .map(pathArrayToString)
        .filter(Boolean)
        .filter(text => text != '')
        .filter(text => typeof text === "string" || typeof text === "number")
        .map(unSlash)
        .join("/").toString();
}
export const urlJoin = pathJoin;


/**
 * Get home url and aslo add path 
 */
export function url(...paths: any) {
    let base_url = null;
    try {
        base_url = (new URL('', globalThis?.location.origin))
    } catch (_err) {
        base_url = null;
    }
    return pathJoin(base_url, ...paths);
}

/**
 * Query string to javascript object
 * @param query query string
 */
export function queryTojson(query: string): object | null {
    var obj: any = {};
    var qury = query.split("&");
    if (typeof qury === "object" && qury.length > 1) {
        for (let i = 0; i < qury.length; i++) {
            if (qury[i].split("=").length === 2) {
                const q = qury[i].split("=");
                obj[q[0]] = q[1];
            }
        }
        return obj;
    } else {
        return null;
    }
}