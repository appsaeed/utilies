import { FileMinetype } from "./types/files";

export type FileOptions = {
  name: string;
  data?: string;
  type?: FileMinetype;
};

export type Callback = (error: any) => void;

/**
 * @param {FileOpenInfo} options 
 * @param {Callback | undefined} callback 
 */
export function downloadFile(options: FileOptions, callback?: Callback): void {
  try {
    const filename = options?.name || 'download.txt';
    const filetype = options?.type || 'text/plain';
    const filedata = options?.data || '';

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
    if (callback) callback(null)
  } catch (error) {
    if (callback) callback(error);
  }
}