import { ThemeType } from "./types/themes";


/**
 * detect device dark schema
 * @returns {boolean}
 */
export const isDarkSchema = window.matchMedia("(prefers-color-scheme: dark)").matches;
export const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;


/**
 * Set theme to local storage
 * @param {ThemeType} mode
 * @param {string} name default storage name user_theme
 * @returns {ThemeType}
 */
export function setTheme(mode: ThemeType, name: string = "user_theme"): ThemeType {
    localStorage.setItem(name, mode);
    return mode;
}


/**
 * detect device schema
 * @returns {boolean}
 */
export const themeSchema: ThemeType = isDarkSchema ? 'dark' : 'light';

/**
 * Get theme from local storage
 * @param {string} name default storage name user_theme
 * @param {ThemeType} schema default system theme schema
 * @returns {ThemeType}
 */
export function getTheme(name: string = "user_theme", schema: ThemeType = themeSchema): ThemeType {
    const store = localStorage.getItem(name);
    if (store === "dark" || store === "light") {
        return store;
    }
    return schema;
}

/**
 * Get theme from local storage
 * @returns {ThemeType}
 */
export const theme = getTheme();

/**
 * Get theme from local storage
 * @returns {Boolean}
 */
export const themeIs = (mode: ThemeType, schema?: ThemeType): boolean => mode === (schema || getTheme());

