export * from './dom';
/**
 * Load image with javascript 
 * @param {string} src 
 * @returns {Promise<HTMLImageElement>}
 */
export function loadImage(src: string): Promise<HTMLImageElement> {
    return new Promise<HTMLImageElement>((resolve, reject) => {
        const image = new Image();
        image.src = src;
        image.addEventListener("load", () => {
            if (image.complete && image.naturalWidth) {
                resolve(image);
            } else {
                reject("couldn't load the image");
            }
        });
        image.addEventListener("error", reject);
    });
}


/**
 * Load image with IntersectionObserver
 * @param {string} src 
 * @returns {Promise<HTMLImageElement>}
 */
export function lazyLoadImage(src: string): Promise<HTMLImageElement> {
    return new Promise<HTMLImageElement>((resolve, reject) => {
        //create observable view
        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.target && entry.isIntersecting) {
                    resolve(entry.target as HTMLImageElement);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback);

        const image = new Image();
        image.src = src;
        image.addEventListener("load", () => {
            if (image.complete && image.naturalWidth) {
                observer.observe(image);
            } else {
                reject("couldn't load the image");
                observer.unobserve(image);
                observer.disconnect();
            }
        });
        image.addEventListener("error", (er) => {
            reject(er);
            observer.unobserve(image);
            observer.disconnect();
        });
    });
}

type LLEConfig = {
    once?: boolean;
};

/**
 * Load elements on view element
 * @param {Element | HTMLElement} element 
 * @param {LLEConfig} config 
 * @returns {Promise<HTMLElement | Element>}
 */
export function lazyLoadElm(element: Element | HTMLElement, config?: LLEConfig): Promise<HTMLElement | Element> {
    const { once = true } = config || {};
    return new Promise<Element | HTMLElement>((resolve, reject) => {
        try {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        resolve(entry.target);
                        if (once) {
                            observer.unobserve(entry.target);
                            observer.disconnect();
                        }
                    }
                });
            });

            if (element) observer.observe(element);
        } catch (error) {
            reject(error);
        }
    });
}