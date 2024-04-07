/**
 * setCookie(name: string, value: string, expires: number)
 * @param {string} cname
 * @param cvalue
 * @param exdays
 */
export function setCookie(cname: string, cvalue: string, exdays: number, path = "/"): void {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/**
 *
 * @param cname
 * @returns {string}
 */
export function getCookie(cname: string): string | null {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
}

export const hasCookie = (name: string) => getCookie(name) != "";
