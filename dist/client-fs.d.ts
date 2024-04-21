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
export declare function downloadFile(options: FileOptions, callback?: Callback): void;
