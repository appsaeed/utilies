import { systemTheme } from "./detection";
import { decryptSync, encryptSync } from "./encryption";
import { catchOrNull } from "./utilies";
/**
 * save any data session
 */
export function setSession(name, data) {
    sessionStorage.setItem(name, encryptSync(JSON.stringify(data)));
    return data;
}
/**
 * Get session data
 */
export function getSession(name) {
    const session = sessionStorage.getItem(name) || "";
    return catchOrNull(JSON.parse(decryptSync(session)));
}
//remove session storage
export const cleanSession = (name) => sessionStorage.removeItem(name);
/**
 * Save any data to local storage
 */
export function setStorage(name, data) {
    localStorage.setItem(name, encryptSync(JSON.stringify(data)));
    return data;
}
/**
 * Get data from local storage
 */
export function getStorage(name) {
    const storage = localStorage.getItem(name) || "";
    return catchOrNull(JSON.parse(decryptSync(storage)));
}
/**
 * clear data from local storage
 */
export const cleanStorage = (name) => localStorage.removeItem(name);
/**
 * Set theme to local storage
 * @param {ThemeType} mode
 * @param {string} name
 * @returns {ThemeType}
 */
export function setThemeStore(mode, name = "user_theme") {
    localStorage.setItem(name, mode);
    return mode;
}
/**
 * Get theme from local storage
 * @param {string} name
 * @returns {ThemeType}
 */
export function getThemeStore(name = "user_theme") {
    const store = localStorage.getItem(name);
    if (store === "dark" || store === "light") {
        return store;
    }
    return systemTheme;
}
