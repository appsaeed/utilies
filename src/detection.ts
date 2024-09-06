import { isClient } from "./utilies";



/**
 * Detect if it is a mobile device
 */
export const isMobile = isClient ? /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) : false;

/**
 * Detect if it is a touch device
 */
export const isTouchDevice = isClient ? (navigator.maxTouchPoints || 'ontouchstart' in document.documentElement) : false;
