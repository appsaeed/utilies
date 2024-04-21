/**
 * Display items with pretty formatting e.g todo, todos , not found
 */
export declare const grammarlyItem: (count: number, names: [string, string, string | undefined]) => string;
export declare function urlBase64ToUint8Array(base64String: string | any[]): Uint8Array;
export declare function catchOrNull<T>(calling: () => T, callback?: (error?: any) => void): T | null;
export declare function catchOR<T, O>(calling: () => T, out: O, callback?: (error?: any) => void): T | O;
export declare function catchError(calling: () => boolean): null | unknown;
