/**
 * @param {FileOpenInfo} options
 * @param {Callback | undefined} callback
 */
export function downloadFile(options, callback) {
    try {
        const filename = (options === null || options === void 0 ? void 0 : options.name) || 'download.txt';
        const filetype = (options === null || options === void 0 ? void 0 : options.type) || 'text/plain';
        const filedata = (options === null || options === void 0 ? void 0 : options.data) || '';
        const blob = new Blob([filedata], { type: filetype });
        const link = URL.createObjectURL(blob);
        const anchor = document.createElement("a");
        anchor.href = link;
        anchor.download = filename;
        document.body.appendChild(anchor);
        window.requestAnimationFrame(function () {
            URL.revokeObjectURL(link);
            var event = new MouseEvent("click");
            anchor.dispatchEvent(event);
            document.body.removeChild(anchor);
        });
        if (callback)
            callback(null);
    }
    catch (error) {
        if (callback)
            callback(error);
    }
}
