import { RangeOf } from "../src copy/types/number";

/**
 * generate random number between start and end using math.random
 * @param {number} start 
 * @param {number} end 
 * @returns {number}
 */
export function random(start: number, end: number): number {
    return Math.floor((Math.random() * end) + start)
}

/**
 * Generate uniqid by crypto
 * @param {string} prefix 
 * @returns {string}
 */
export const uniqid = (prefix: string = ''): string => prefix + crypto.randomUUID();

/**
 * Generate random string
 * @param {number} len length of the string
 * @returns 
 */
export function randomString(len: number = 10, prefix = ''): string {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const randomArray = new Uint8Array(len);
    crypto.getRandomValues(randomArray);
    randomArray.forEach((number) => {
        result += chars[number % chars.length];
    });
    return `${prefix}${result}`;
}

/**
 * genarate random uuid
 */
export function uuid(_length: number | null = null, prefix: string | null = null): string {
    const _Length: number = _length ? _length : 36;
    const _prefix: string = prefix ? prefix : "";
    const maps = "abcdefghigklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const made = [...Array(_Length)]
        .map(() => maps.substr(Math.floor(Math.random() * maps.length) + 0, 1))
        .join("")
        .toString();

    return _prefix + made;
}

/**
 * Generate random uuidv1
 * @returns
 */
export const uuidv1 = (_length: RangeOf<0, 36> = 36, prefix = ""): string => {
    const _Length = _length;
    const uuid = Date.now().toString(_Length) + Math.random().toString(_Length).substring(2);
    return `${prefix}${uuid}`;
};

/**
 * generate custom uuid with v4
 */
export function uuidv4() {
    var arr = new Uint8Array(16);
    crypto.getRandomValues(arr);
    arr[6] = (arr[6] & 0x0f) | 0x40; // set version number to 4
    arr[8] = (arr[8] & 0x3f) | 0x80; // set variant number to RFC4122

    var hexStringArray = [];
    for (var i = 0; i < arr.length; i++) {
        hexStringArray.push(arr[i].toString(16));
    }

    var uuid = hexStringArray.join("").replace(/^.{8}(.{4}).{3}(.{3}).{12}$/, function (_match, p1, p2) {
        return p1 + '-' + p2 + '-4' + Date.now() % 1000000000;
    });

    return uuid;
}


/**
 * Get avatar placeholder image by shorts latters
 * uses api: https://github.com/LasseRafn/ui-avatars
 */
export const avatar = (n = "s") => `https://ui-avatars.com/api/?name=${n}`;
