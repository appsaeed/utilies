/* eslint-disable @typescript-eslint/no-explicit-any */
export function shareToSocial(data: ShareData): Error | null {
	try {
		navigator.share(data);
		return null;
	} catch (error: any) {
		return new Error(String(error));
	}
}
