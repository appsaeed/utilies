/* eslint-disable @typescript-eslint/no-unused-vars */
export function json_decode(data?: string, falback = {}) {
	try {
		return JSON.parse(data || "{}");
	} catch (_e) {
		return falback;
	}
}
