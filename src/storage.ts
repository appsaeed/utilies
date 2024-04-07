import { systemTheme } from "./detection";
import { ThemeType } from "./types/themes";

/**
 * save any data session
 */
export function setSession<T>(name: string, data: T): T {
  sessionStorage.setItem(name, btoa(JSON.stringify({ data: data })));
  return data;
}

/**
 * Get session data 
 */
export function getSession<T>(name: string): T | null {
  try {
    const str = sessionStorage.getItem(name) || "";
    return JSON.parse(atob(str))?.data;
  } catch (error) {
    return null;
  }
}

//remove session storage
export const cleanSession = (name: string) => sessionStorage.removeItem(name);

/**
 * Save any data to local storage
 */
export function setStorage<T>(name: string, data: T): T {
  localStorage.setItem(name, btoa(JSON.stringify({ data: data })));
  return data;
}


/**
 * Get data from local storage
 */
export function getStorage<T>(name: string): T | null {
  try {
    const str = localStorage.getItem(name) || "";
    return JSON.parse(atob(str))?.data;
  } catch (error) {
    return null;
  }
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
