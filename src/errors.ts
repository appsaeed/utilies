/* eslint-disable @typescript-eslint/no-explicit-any */
export function errorToString(error: any): string {
	try {
		if (Array.isArray(error)) {
			return String(error.join(","));
		} else if (typeof error === "object") {
			return JSON.stringify(error);
		} else {
			return String(error);
		}
	} catch (error) {
		return String(error);
	}
}

export function errorsToString(...errors: any[]): string {
	return errors.map((error) => errorToString(error)).join(", ");
}

export const extractError = errorToString;
export const extractErrors = errorsToString;

export function catchOrNull<T>(calling: () => T, callback?: (error?: any) => void): T | null {
	try {
		if (typeof calling === "function") return calling();
		return null;
	} catch (error) {
		if (callback) callback(error);
		return null;
	}
}

export function catchOR<T, O>(calling: () => T, out: O, callback?: (error?: any) => void): T | O {
	try {
		if (typeof calling === "function") return calling();
		return out;
	} catch (error) {
		if (callback) callback(error);
		return out;
	}
}

export function catchError(calling: () => boolean): null | unknown {
	try {
		if (typeof calling === "function") calling();
		return null;
	} catch (error) {
		return error;
	}
}
