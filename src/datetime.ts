/**
 * Format date time to human readable | formatted by  toLocaleString
 * @param {string} date 
 * @param {Intl.DateTimeFormatOptions} options 
 * @returns {string}
 */
export function toDatetime(date: string, options?: Intl.DateTimeFormatOptions, locales: string | [] = []): string {
  try {
    const opt: Intl.DateTimeFormatOptions = options || {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }
    return new Date(date).toLocaleString(locales, opt);
  } catch (error) {
    return "";
  }
}


/**
 * Format date to human readable | formatted by  toLocaleDateString
 * @param {string} date 
 * @param {Intl.DateTimeFormatOptions} options 
 * @returns {string}
 */
export function toDate(date: string, options?: Intl.DateTimeFormatOptions, locales: string | [] = []): string {
  try {
    const opt: Intl.DateTimeFormatOptions = options || {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }
    return new Date(date).toLocaleDateString(locales, opt);
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
export function toTime(date: string, options?: Intl.DateTimeFormatOptions, locales: string | [] = []): string {
  try {
    const opt: Intl.DateTimeFormatOptions = options || {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }
    return new Date(date).toLocaleTimeString(locales, opt);
  } catch (error) {
    return "";
  }
}