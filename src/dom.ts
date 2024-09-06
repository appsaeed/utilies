export function isElementInViewport(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (globalThis.innerHeight || document.documentElement.clientHeight) && rect.right <= (globalThis.innerWidth || document.documentElement.clientWidth);
}

export const isViewElm = isElementInViewport;