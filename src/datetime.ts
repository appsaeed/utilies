/* eslint-disable @typescript-eslint/no-unused-vars */

type DateOptions = Intl.DateTimeFormatOptions & { locales: Intl.LocalesArgument };

/**
 * Format date time to human readable | formatted by  toLocaleString
 * @param {string} date
 * @param {Intl.DateTimeFormatOptions} options
 * @returns {string}
 */
export function dateTime(date: string, options?: DateOptions): string {
	try {
		const { locales, ...params } = options || {};

		return new Date(date).toLocaleString(locales, {
			hour: "2-digit",
			minute: "2-digit",
			hour12: true,
			...params,
		});
	} catch (error) {
		return "";
	}
}

export const datetime = dateTime;

/**
 * Format date to human readable | formatted by  toLocaleDateString
 * @param {string} date
 * @param {Intl.DateTimeFormatOptions} options
 * @returns {string}
 */
export function date(date: string, options?: DateOptions): string {
	try {
		const { locales, ...params } = options || {};

		return new Date(date).toLocaleDateString(locales, {
			hour: "2-digit",
			minute: "2-digit",
			hour12: true,
			...params,
		});
		//
	} catch (error) {
		return "";
	}
}

/**
 * Format time to human readable | formatted by  toLocaleTimeString
 * @param {string} date
 * @param {Intl.DateTimeFormatOptions} options
 * @returns {string}
 */
export function time(date: string, options?: DateOptions): string {
	try {
		const { locales, ...params } = options || {};

		return new Date(date).toLocaleTimeString(locales, {
			hour: "2-digit",
			minute: "2-digit",
			hour12: true,
			...params,
		});
		//
	} catch (error) {
		return "";
	}
}
