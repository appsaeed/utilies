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
