/**
 * fomrat price | used to calculate strip payment amount
 * @param {string} price 
 * @returns 
 */
export function formatPrice(price: number | string) {
  if (typeof price === "string") {
    return Number(price) * 100;
  }
  return price * 100;
}

/**
 * currency code to symbol | help of built-in toLocaleString
 * @param currency currency code
 * @param {string} language language e.g en-US
 * @returns {string}
 */
export function currencyToSymbol(currency: string, language: string): string {
  return (0)
    .toLocaleString(language, {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    .replace(/\d/g, "")
    .trim();
}

/**
 * rgb to hex string
 * @param red
 * @param green
 * @param blue
 */
export function rgbToHex(
  red: number | string,
  green: number | string,
  blue: number | string
) {
  return (
    "#" +
    ((1 << 24) | (Number(red) << 16) | (Number(green) << 8) | Number(blue))
      .toString(16)
      .slice(1)
  );
}

/**
 * hex string to rgb
 * @param hex string
 */
export function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
      red: parseInt(result[1], 16),
      green: parseInt(result[2], 16),
      blue: parseInt(result[3], 16),
    }
    : null;
}
