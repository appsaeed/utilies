/**
 * Display items with pretty formatting e.g todo, todos , not found
 */
export const grammarlyItem = (count: number, names: [string, string, string | undefined]) => {
    switch (count) {
        case 0:
            return names[2] ? names[2] : 'Empty';
        case 1:
            return count + ' ' + names[0]
        default:
            return count + ' ' + names[1]
    }
}


export function urlBase64ToUint8Array(base64String: string | any[]) {
    const padding = "=".repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/-/g, "+")
        .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}



export function catchOrNull<T>(calling: () => T, callback?: (error?: any) => void): T | null {
    try {
        if (typeof calling === 'function') return calling();
        return null;
    }
    catch (error) {
        if (callback) callback(error);
        return null;
    }
}

export function catchOR<T, O>(calling: () => T, out: O, callback?: (error?: any) => void): T | O {
    try {
        if (typeof calling === 'function') return calling();
        return out;
    }
    catch (error) {
        if (callback) callback(error);
        return out;
    }
}

export function catchError(calling: () => boolean): null | unknown {
    try {
        if (typeof calling === 'function') calling();
        return null;
    }
    catch (error) {
        return error;
    }
}
