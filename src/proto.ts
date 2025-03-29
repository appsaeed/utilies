if (!Object.prototype.hasOwnProperty) {
	Object.prototype.hasOwnProperty = function (key: PropertyKey): boolean {
		return Object.keys(this).indexOf(key.toString()) !== -1;
	};
}

export function haskey<O, K extends keyof O>(this: O, key: K): boolean {
	return Object.prototype.hasOwnProperty.call(this, key);
}

export function in_array(search: string[] | string, arr: []): boolean {
	let output: boolean = false;
	const _array = arr;
	if (Array.isArray(search)) {
		search.map((s) => (output = _array.indexOf(s as never) !== -1));
	} else {
		return _array.indexOf(search as never) !== -1;
	}
	return output;
}
