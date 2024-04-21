export function shareToSocial(data) {
    try {
        navigator.share(data);
        return null;
    }
    catch (error) {
        return new Error(String(error));
    }
}
