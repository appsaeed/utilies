import { ThemeType } from "./types/themes";
/**
 * save any data session
 */
export declare function setSession<T>(name: string, data: T): T;
/**
 * Get session data
 */
export declare function getSession<T>(name: string): T | null;
export declare const cleanSession: (name: string) => void;
/**
 * Save any data to local storage
 */
export declare function setStorage<T>(name: string, data: T): T;
/**
 * Get data from local storage
 */
export declare function getStorage<T>(name: string): T | null;
/**
 * clear data from local storage
 */
export declare const cleanStorage: (name: string) => void;
/**
 * Set theme to local storage
 * @param {ThemeType} mode
 * @param {string} name
 * @returns {ThemeType}
 */
export declare function setThemeStore(mode: ThemeType, name?: string): ThemeType;
/**
 * Get theme from local storage
 * @param {string} name
 * @returns {ThemeType}
 */
export declare function getThemeStore(name?: string): ThemeType;
