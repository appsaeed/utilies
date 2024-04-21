import { RangeOf } from "./types/number";
/**
 * generate random number between start and end using math.random
 * @param {number} start
 * @param {number} end
 * @returns {number}
 */
export declare function random(start: number, end: number): number;
/**
 * Generate uniqid by crypto
 * @param {string} prefix
 * @returns {string}
 */
export declare const uniqid: (prefix?: string) => string;
/**
 * Generate random string
 * @param {number} len length of the string
 * @returns
 */
export declare function randomString(len?: number, prefix?: string): string;
/**
 * genarate random uuid
 */
export declare function uuid(_length?: number | null, prefix?: string | null): string;
/**
 * Generate random uuidv1
 * @returns
 */
export declare const uuidv1: (_length?: RangeOf<0, 36>, prefix?: string) => string;
/**
 * generate custom uuid with v4
 */
export declare function uuidv4(): string;
/**
 * Get avatar placeholder image by shorts latters
 * uses api: https://github.com/LasseRafn/ui-avatars
 */
export declare const avatar: (n?: string) => string;
