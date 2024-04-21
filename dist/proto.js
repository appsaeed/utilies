if (!Object.prototype.hasOwnProperty) {
    Object.prototype.hasOwnProperty = function (key) {
        return Object.keys(this).indexOf(key.toString()) !== -1;
    };
}
// if (!Object.entries) {
//   Object.entries = function (o: { [x: string]: any }): Array<any> {
//     var result: Array<any> = [];
//     for (const key in o) {
//       if (o.hasOwnProperty(key)) {
//         result.push({ [key]: o[key] });
//       }
//     }
//     return result;
//   };
// }
export function haskey(key) {
    return Object.prototype.hasOwnProperty.call(this, key);
}
;
export function in_array(search, arr) {
    let output = false;
    const _array = arr;
    if (Array.isArray(search)) {
        search.map((s) => (output = _array.indexOf(s) !== -1));
    }
    else {
        return _array.indexOf(search) !== -1;
    }
    return output;
}
;
