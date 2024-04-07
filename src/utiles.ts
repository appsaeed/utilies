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
