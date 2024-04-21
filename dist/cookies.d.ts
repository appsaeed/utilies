interface CookieProperties {
    expires?: number;
    secure?: boolean;
    secret?: string;
    domain?: string;
    path?: string;
    httpOnly?: boolean;
    sameSite?: "Strict" | "Lax" | "None";
}
export declare class Cookies {
    #private;
    protected options: CookieProperties | undefined;
    constructor(options?: CookieProperties);
    /**
     * Set document cookie
     * @param cname cookie name as string
     * @param cvalue cookie value as any data types accepted by JSON.stringify
     * @param options cookie options
     */
    set(cname: string, cvalue: any, properties?: CookieProperties): false | this;
    /**
     * Get document cookie by cookie name
     * @param cname cookie name
     * @param withOption is optional default false | if true will return cookie value with properties
     */
    get<T>(cname: string, withOptions?: boolean): T | null;
    /**
     * Check cookie is set
     * @param {string} cname cookie name
     * @returns {boolean}
     */
    is(cname: string): boolean;
    /**
     * Check cookie is set
     * @param {string} cname cookie name
     * @returns {boolean}
     */
    delete(cname: string): boolean;
    /**
     * Get all document cookies
     */
    all(withOptions?: boolean): {
        name: string;
        value: any;
    }[];
}
export declare const setCookie: (cname: string, cvalue: any, properties?: CookieProperties) => false | Cookies;
export declare const getCookie: <T>(cname: string, withOptions?: boolean) => T | null;
export declare const isCookie: (cname: string) => boolean;
export declare const hasCookie: (cname: string) => boolean;
export declare const allCookies: (withOptions?: boolean) => {
    name: string;
    value: any;
}[];
export {};
