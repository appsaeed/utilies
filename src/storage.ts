import { systemTheme } from "./detection";
import { decryptSync, encryptSync } from "./encryption";
import { ThemeType } from "./types/themes";
import { catchOrNull } from "./utilies";

/**
 * save any data session
 */
export function setSession<T>(name: string, data: T): T {
  sessionStorage.setItem(name, encryptSync(JSON.stringify(data)));
  return data as T;
}

/**
 * Get session data 
 */
export function getSession<T>(name: string): T | null {
  const session = sessionStorage.getItem(name) || "";
  return catchOrNull<T>(JSON.parse(decryptSync(session)))
}

//remove session storage
export const cleanSession = (name: string) => sessionStorage.removeItem(name);

/**
 * Save any data to local storage
 */
export function setStorage<T>(name: string, data: T): T {
  localStorage.setItem(name, encryptSync(JSON.stringify(data)));
  return data;
}


/**
 * Get data from local storage
 */
export function getStorage<T>(name: string): T | null {
  const storage = localStorage.getItem(name) || "";
  return catchOrNull<T>(JSON.parse(decryptSync(storage)))
}

/**
 * clear data from local storage
 */
export const cleanStorage = (name: string) => localStorage.removeItem(name);

/**
 * Set theme to local storage
 * @param {ThemeType} mode
 * @param {string} name
 * @returns {ThemeType}
 */
export function setThemeStore(mode: ThemeType, name: string = "user_theme"): ThemeType {
  localStorage.setItem(name, mode);
  return mode;
}

/**
 * Get theme from local storage
 * @param {string} name
 * @returns {ThemeType}
 */
export function getThemeStore(name: string = "user_theme"): ThemeType {
  const store = localStorage.getItem(name);
  if (store === "dark" || store === "light") {
    return store;
  }
  return systemTheme;
}
