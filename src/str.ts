/**
 * clear html characters from string
 * @param {string} html
 * @returns
 */
export function removeHtml(html: string) {
	return String(html)
		.toString()
		.replace(/<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/g, "");
}

/**
 * css duration string to milliseconds number
 * @param cssDuration
 * @returns {number}
 */
export function cssDurationToMillisecond(cssDuration: string | number = "1s"): number {
	const duration = String(cssDuration);
	const numericValue = parseFloat(duration);
	const unit = duration.match(/[a-z]+/)?.toString();
	if (unit == "s") {
		return numericValue * 1000;
	} else if (unit == "ms") {
		return numericValue;
	} else {
		return numericValue;
	}
}
/**
 * css duration string to milliseconds number
 * @param cssDuration
 * @returns {number}
 */
export const cssToMillisecond = cssDurationToMillisecond;

export const capitalize = (s: string = "") => s.charAt(0).toUpperCase() + s.slice(1);
