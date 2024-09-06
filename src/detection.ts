"use client";

/**
 * Detect if it is a mobile device
 */
export const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

/**
 * Detect if it is a touch device
 */
export const isTouchDevice = (navigator.maxTouchPoints || 'ontouchstart' in document.documentElement);
