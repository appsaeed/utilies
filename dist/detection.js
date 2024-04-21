/**
 * detect device dark schema
 * @returns {boolean}
 */
export const is_dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
/**
 * detect device dark schema
 * @returns {boolean}
 */
export const deviceTheme = is_dark ? 'dark' : 'light';
export const systemTheme = deviceTheme;
/**
 * Detetect is mobile device
 */
export const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
/**
 * Detetect is touch device
 */
export const isTouchDevice = (navigator.maxTouchPoints || 'ontouchstart' in document.documentElement);
