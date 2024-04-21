type PDFoptions = {
    width?: number;
    height?: number;
    top?: number;
    left?: number;
};
/**
 * Export html or string to pdf
 */
export default function exportToPdf(name: string, content?: string, options?: PDFoptions): boolean;
export declare function exportToDocs(name: string, content?: string): boolean;
export {};
