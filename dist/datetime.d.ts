/**
 * Format date time to human readable | formatted by  toLocaleString
 * @param {string} date
 * @param {Intl.DateTimeFormatOptions} options
 * @returns {string}
 */
export declare function toDatetime(date: string, options?: Intl.DateTimeFormatOptions, locales?: string | []): string;
/**
 * Format date to human readable | formatted by  toLocaleDateString
 * @param {string} date
 * @param {Intl.DateTimeFormatOptions} options
 * @returns {string}
 */
export declare function toDate(date: string, options?: Intl.DateTimeFormatOptions, locales?: string | []): string;
/**
 * Format time to human readable | formatted by  toLocaleTimeString
 * @param {string} date
 * @param {Intl.DateTimeFormatOptions} options
 * @returns {string}
 */
export declare function toTime(date: string, options?: Intl.DateTimeFormatOptions, locales?: string | []): string;
