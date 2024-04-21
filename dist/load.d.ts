/**
 * Load image with javascript
 * @param {string} src
 * @returns {Promise<HTMLImageElement>}
 */
export declare function loadImage(src: string): Promise<HTMLImageElement>;
/**
 * Load image with IntersectionObserver
 * @param {string} src
 * @returns {Promise<HTMLImageElement>}
 */
export declare function lazyLoadImage(src: string): Promise<HTMLImageElement>;
type LLEConfig = {
    once?: boolean;
};
/**
 * Load elements on view element
 * @param {Element | HTMLElement} element
 * @param {LLEConfig} config
 * @returns {Promise<HTMLElement | Element>}
 */
export declare function lazyLoadElm(element: Element | HTMLElement, config?: LLEConfig): Promise<HTMLElement | Element>;
export {};
