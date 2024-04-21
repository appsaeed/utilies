/**
 * validate email address
 */
export function isMail(email) {
    return /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
export function validate(field, value, options, messages) {
    const _options = options || { required: true };
    const name = String(field).trim();
    const min = (_options === null || _options === void 0 ? void 0 : _options.min) || 0;
    const max = (_options === null || _options === void 0 ? void 0 : _options.min) || 0;
    const _messages = Object.assign({ required: `The ${name} field is required!`, email: `The email address is not valid: ${value}`, min: `The ${name} field is required at least ${min} but riched ${value}`, max: `The ${name} field is riched max value ${value} required less than ${max}` }, messages);
    if (!value && (_options === null || _options === void 0 ? void 0 : _options.required)) {
        return _messages.required;
    }
    else if ((options === null || options === void 0 ? void 0 : options.email) && !isMail(String(value))) {
        return _messages.email;
    }
    else if (Number(value) < min) {
        return _messages.min;
    }
    else if (Number(value) > max) {
        return _messages.max;
    }
    return false;
}
export const isErrorFiled = validate;
/**
 * Validate the phone number
 */
export const isPhoneNumber = (phone) => /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(phone);
