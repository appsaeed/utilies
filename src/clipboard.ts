/**
 * Copy image to clipboard by image url
 * @param {string} url
 * @return {Promise<boolean>}
 */
export async function copyImageToClipboard(url: string): Promise<boolean> {
  try {
    const req = await fetch(url);
    const blob = await req.blob();
    navigator.clipboard.write([
      new ClipboardItem({
        [blob.type]: blob,
      }),
    ]);
    return new Promise((resolve, _reject) => {
      resolve(true);
    });
  } catch (error) {
    return new Promise((_resolve, reject) => {
      reject(error);
    });
  }
}

/**
 * Image url to convert blob object as an promise
 * @param url
 * @returns
 */
export function imageToBlob(url: string): Promise<Blob | null> {
  const image = new Image();
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  image.crossOrigin = "anonymous";
  image.src = url;

  return new Promise((resolve, reject) => {
    image.onload = function () {
      canvas.width = image.width;
      canvas.height = image.height;
      context?.drawImage(image, 0, 0);
      canvas.toBlob((blob) => resolve(blob), "image/png", 0.75);
    };
    image.onerror = (error) => reject(error);
  });
}

/**
 * copy text to clipboard
 * @param {string} text
 */
export async function toClipboard(text: string) {
  if ("clipboard" in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return fallbackToClipboard(text);
  }
}

/**
 * copy text to clipboard 
 * @param {string} text
 * @function toClipboard
 */
export const copyToClipboard = toClipboard;

export function fallbackToClipboard(text: string) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    const successful = document.execCommand("copy");
    document.body.removeChild(textArea);
    if (!successful) {
      throw new Error(
        "failed to copy text to clipboard useing dom execCommand"
      );
    } else {
      return new Promise((resolve, _reject) => {
        resolve(true);
      });
    }
  } catch (err) {
    return new Promise((_resolve, reject) => {
      reject(err);
    });
  }
}
