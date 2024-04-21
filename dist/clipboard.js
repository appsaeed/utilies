var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Copy image to clipboard by image url
 * @param {string} url
 * @return {Promise<boolean>}
 */
export function copyImageToClipboard(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const req = yield fetch(url);
            const blob = yield req.blob();
            navigator.clipboard.write([
                new ClipboardItem({
                    [blob.type]: blob,
                }),
            ]);
            return new Promise((resolve, _reject) => {
                resolve(true);
            });
        }
        catch (error) {
            return new Promise((_resolve, reject) => {
                reject(error);
            });
        }
    });
}
/**
 * Image url to convert blob object as an promise
 * @param url
 * @returns
 */
export function imageToBlob(url) {
    const image = new Image();
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    image.crossOrigin = "anonymous";
    image.src = url;
    return new Promise((resolve, reject) => {
        image.onload = function () {
            canvas.width = image.width;
            canvas.height = image.height;
            context === null || context === void 0 ? void 0 : context.drawImage(image, 0, 0);
            canvas.toBlob((blob) => resolve(blob), "image/png", 0.75);
        };
        image.onerror = (error) => reject(error);
    });
}
/**
 * copy text to clipboard
 * @param {string} text
 */
export function toClipboard(text) {
    return __awaiter(this, void 0, void 0, function* () {
        if ("clipboard" in navigator) {
            return yield navigator.clipboard.writeText(text);
        }
        else {
            return fallbackToClipboard(text);
        }
    });
}
/**
 * copy text to clipboard
 * @param {string} text
 * @function toClipboard
 */
export const copyToClipboard = toClipboard;
export function fallbackToClipboard(text) {
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
            throw new Error("failed to copy text to clipboard useing dom execCommand");
        }
        else {
            return new Promise((resolve, _reject) => {
                resolve(true);
            });
        }
    }
    catch (err) {
        return new Promise((_resolve, reject) => {
            reject(err);
        });
    }
}
