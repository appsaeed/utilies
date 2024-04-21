var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Cookies_secret;
import { decryptSync, encryptSync } from "./encryption";
import { catchOrNull } from "./utilies.js";
export class Cookies {
    constructor(options) {
        /**
         * Cookie secret
         */
        _Cookies_secret.set(this, 'm^Ul8Y1qGpPO-#9j;Gt2KEDF8P@btDHYIC01T');
        // public static rawCookie = '';
        //cookies options
        this.options = {};
        this.options = options || {};
    }
    /**
     * Set document cookie
     * @param cname cookie name as string
     * @param cvalue cookie value as any data types accepted by JSON.stringify
     * @param options cookie options
     */
    set(cname, cvalue, properties) {
        try {
            const options = Object.assign(Object.assign({}, this.options), properties);
            //create data array to push cookie properties
            const cookies = Array(10).fill(null);
            //creating expiration useing date object
            const expires = (new Date(Date.now() + ((options === null || options === void 0 ? void 0 : options.expires) || 0))).toUTCString();
            //push cookie property expiration if passed through options or null
            cookies[1] = (options === null || options === void 0 ? void 0 : options.expires) ? `expires=${expires}` : null;
            //push cookie property domain by options
            cookies[2] = (options === null || options === void 0 ? void 0 : options.domain) ? `domain=${options === null || options === void 0 ? void 0 : options.domain}` : null;
            //push cookie property path
            cookies[3] = `path=${(options === null || options === void 0 ? void 0 : options.path) || '/'}`;
            //set cookie property is secure or null
            cookies[4] = options.secure === false || options.secure === null ? null : 'secure';
            //push cookie property HttpOnly or null
            cookies[5] = (options === null || options === void 0 ? void 0 : options.httpOnly) ? `HttpOnly` : null;
            //push cookie property sameSite or null
            cookies[6] = (options === null || options === void 0 ? void 0 : options.sameSite) ? `sameSite=${options.sameSite}` : `sameSite=Strict`;
            const saveOptions = {
                name: cname,
                value: cvalue,
                expires: options === null || options === void 0 ? void 0 : options.expires,
                secure: (options === null || options === void 0 ? void 0 : options.secure) === false || options.secure === null ? false : true,
                domain: (options === null || options === void 0 ? void 0 : options.domain) || location.hostname,
                path: (options === null || options === void 0 ? void 0 : options.path) || '/',
                httpOnly: (options === null || options === void 0 ? void 0 : options.httpOnly) || false,
                sameSite: (options === null || options === void 0 ? void 0 : options.sameSite) || 'Strict',
            };
            //create client data to string by JSON.stringify
            const stringify = JSON.stringify({ data: cvalue, options: saveOptions });
            //make the client string data to encrypted and endcoded url
            const secret = options.secret || __classPrivateFieldGet(this, _Cookies_secret, "f");
            const values = encodeURIComponent(encryptSync(stringify, secret));
            //set cookie name and value after encryption
            cookies[0] = `${cname}=${values}`;
            //filter only valid values and remove null, false, undefined  falsey values
            const cookie = cookies.filter(Boolean).join('; ').toString();
            //finaly set cookie
            document.cookie = String(cookie);
            //instanly cookie get request and response cookie value to check the cookie is 
            return this;
        }
        catch (error) {
            return false;
        }
    }
    /**
     * Get document cookie by cookie name
     * @param cname cookie name
     * @param withOption is optional default false | if true will return cookie value with properties
     */
    get(cname, withOptions = false) {
        var _a, _b;
        const value = (_a = document.cookie
            .split('; ')
            .find(row => row.startsWith(`${cname}=`))) === null || _a === void 0 ? void 0 : _a.split('=')[1];
        if (!value)
            return null;
        try {
            const secret = ((_b = this.options) === null || _b === void 0 ? void 0 : _b.secret) || __classPrivateFieldGet(this, _Cookies_secret, "f");
            const values = decryptSync(decodeURIComponent(value), secret);
            if (withOptions)
                return catchOrNull(JSON.parse(values));
            return catchOrNull(() => { var _a; return (_a = JSON.parse(values)) === null || _a === void 0 ? void 0 : _a.data; });
        }
        catch (error) {
            return null;
        }
    }
    /**
     * Check cookie is set
     * @param {string} cname cookie name
     * @returns {boolean}
     */
    is(cname) {
        var _a;
        const value = (_a = document.cookie
            .split('; ')
            .find(row => row.startsWith(`${cname}=`))) === null || _a === void 0 ? void 0 : _a.split('=')[1];
        return value && value.length > 0 ? true : false;
    }
    /**
     * Check cookie is set
     * @param {string} cname cookie name
     * @returns {boolean}
     */
    delete(cname) {
        document.cookie = `${cname}=""; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
        return true;
    }
    /**
     * Get all document cookies
     */
    all(withOptions = false) {
        return document.cookie.split("; ").map((cookie) => {
            const parts = cookie.split("=");
            const name = decodeURIComponent(parts[0]);
            const value = this.get(name, withOptions);
            return {
                name,
                value: value
            };
        });
    }
}
_Cookies_secret = new WeakMap();
export const setCookie = new Cookies().set.bind(Cookies);
export const getCookie = new Cookies().get.bind(Cookies);
export const isCookie = new Cookies().is.bind(Cookies);
export const hasCookie = new Cookies().is.bind(Cookies);
export const allCookies = new Cookies().all.bind(Cookies);
