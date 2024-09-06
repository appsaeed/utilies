"use client";
import { decryptSync, encryptSync } from "./encryption";
import { catchOrNull } from "./utilies.js";

interface CookieProperties {
  expires?: number;
  secure?: boolean;
  secret?: string;
  domain?: string;
  path?: string;
  httpOnly?: boolean;
  sameSite?: "Strict" | "Lax" | "None"
}

export class Cookies {

  /**
   * Cookie secret
   */
  #secret: string = 'm^Ul8Y1qGpPO-#9j;Gt2KEDF8P@btDHYIC01T';

  // public static rawCookie = '';
  //cookies options
  protected options: CookieProperties | undefined = {};

  constructor(options?: CookieProperties) {
    this.options = options || {};
  }



  /**
   * Set document cookie
   * @param cname cookie name as string
   * @param cvalue cookie value as any data types accepted by JSON.stringify
   * @param options cookie options
   */
  public set(cname: string, cvalue: any, properties?: CookieProperties) {
    try {
      const options: CookieProperties = { ...this.options, ...properties }

      //create data array to push cookie properties
      const cookies = Array(10).fill(null);

      //creating expiration useing date object
      const expires = (new Date(Date.now() + (options?.expires || 0))).toUTCString();


      //push cookie property expiration if passed through options or null
      cookies[1] = options?.expires ? `expires=${expires}` : null;
      //push cookie property domain by options
      cookies[2] = options?.domain ? `domain=${options?.domain}` : null;
      //push cookie property path
      cookies[3] = `path=${options?.path || '/'}`
      //set cookie property is secure or null
      cookies[4] = options.secure === false || options.secure === null ? null : 'secure';
      //push cookie property HttpOnly or null
      cookies[5] = options?.httpOnly ? `HttpOnly` : null;

      //push cookie property sameSite or null
      cookies[6] = options?.sameSite ? `sameSite=${options.sameSite}` : `sameSite=Strict`;

      const saveOptions: CookieProperties & { name: string, value: string } = {
        name: cname,
        value: cvalue,
        expires: options?.expires,
        secure: options?.secure === false || options.secure === null ? false : true,
        domain: options?.domain || location.hostname,
        path: options?.path || '/',
        httpOnly: options?.httpOnly || false,
        sameSite: options?.sameSite || 'Strict',
      }

      //create client data to string by JSON.stringify
      const stringify = JSON.stringify({ data: cvalue, options: saveOptions })

      //make the client string data to encrypted and endcoded url
      const secret = options.secret || this.#secret;
      const values = encodeURIComponent(encryptSync(stringify, secret))

      //set cookie name and value after encryption
      cookies[0] = `${cname}=${values}`;

      //filter only valid values and remove null, false, undefined  falsey values
      const cookie = cookies.filter(Boolean).join('; ').toString();

      //finaly set cookie
      document.cookie = String(cookie);

      //instanly cookie get request and response cookie value to check the cookie is 
      return this;
    } catch (error) {
      return false;
    }
  }

  /**
   * Get document cookie by cookie name
   * @param cname cookie name
   * @param withOption is optional default false | if true will return cookie value with properties
   */
  public get<T>(cname: string, withOptions = false): T | null {
    const value = document.cookie
      .split('; ')
      .find(row => row.startsWith(`${cname}=`))
      ?.split('=')[1];

    if (!value) return null;
    try {
      const secret = this.options?.secret || this.#secret;
      const values = decryptSync(decodeURIComponent(value), secret)
      if (withOptions) return catchOrNull(JSON.parse(values))
      return catchOrNull(() => JSON.parse(values)?.data as T);
    } catch (error) {
      return null;
    }
  }

  /**
   * Check cookie is set
   * @param {string} cname cookie name
   * @returns {boolean}
   */
  public is(cname: string): boolean {
    const value = document.cookie
      .split('; ')
      .find(row => row.startsWith(`${cname}=`))
      ?.split('=')[1];

    return value && value.length > 0 ? true : false;
  }

  /**
   * Check cookie is set
   * @param {string} cname cookie name
   * @returns {boolean}
   */
  public delete(cname: string): boolean {
    document.cookie = `${cname}=""; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
    return true;
  }

  /**
   * Get all document cookies
   */
  public all(withOptions = false): { name: string, value: any }[] {
    return document.cookie.split("; ").map((cookie) => {
      const parts = cookie.split("=");
      const name = decodeURIComponent(parts[0]);
      const value = this.get(name, withOptions);
      return {
        name,
        value: value
      }
    })
  }

}



export const setCookie = new Cookies().set.bind(Cookies);
export const getCookie = new Cookies().get.bind(Cookies);
export const isCookie = new Cookies().is.bind(Cookies);
export const hasCookie = new Cookies().is.bind(Cookies);
export const allCookies = new Cookies().all.bind(Cookies);
