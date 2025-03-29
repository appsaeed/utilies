/**
 * Format date time to human readable | formatted by  toLocaleString
 * @param {string} date
 * @param {Intl.DateTimeFormatOptions} options
 * @returns {string}
 */
export function dateTime(date: string, options?: Intl.DateTimeFormatOptions, locales: string | [] = []): string {
	try {
		const opt: Intl.DateTimeFormatOptions = options || {
			hour: "2-digit",
			minute: "2-digit",
			hour12: true,
		};
		return new Date(date).toLocaleString(locales, opt);
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
export function date(date: string, options?: Intl.DateTimeFormatOptions, locales: string | [] = []): string {
	try {
		const opt: Intl.DateTimeFormatOptions = options || {
			hour: "2-digit",
			minute: "2-digit",
			hour12: true,
		};
		return new Date(date).toLocaleDateString(locales, opt);
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
export function time(date: string, options?: Intl.DateTimeFormatOptions, locales: string | [] = []): string {
	try {
		const opt: Intl.DateTimeFormatOptions = options || {
			hour: "2-digit",
			minute: "2-digit",
			hour12: true,
		};
		return new Date(date).toLocaleTimeString(locales, opt);
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (error) {
		return "";
	}
}
