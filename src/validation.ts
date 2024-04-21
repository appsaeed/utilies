/**
 * validate email address
 */
export function isMail(email: string): boolean {
  return /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

type Attributes = {
  required?: boolean;
  email?: boolean;
  number?: boolean;
  min?: number;
  max?: number;
};
type Errors = {
  required?: string;
  email?: string;
  number?: string;
  min?: string;
  max?: string;
};

export function validate(field: string, value: any, options?: Attributes, messages?: Errors) {

  const _options = options || { required: true };
  const name = String(field).trim();
  const min: number = _options?.min || 0;
  const max: number = _options?.min || 0;

  const _messages = {
    required: `The ${name} field is required!`,
    email: `The email address is not valid: ${value}`,
    min: `The ${name} field is required at least ${min} but riched ${value}`,
    max: `The ${name} field is riched max value ${value} required less than ${max}`,
    ...messages
  };

  if (!value && _options?.required) {
    return _messages.required;
  } else if (options?.email && !isMail(String(value))) {
    return _messages.email;
  } else if (Number(value) < min) {
    return _messages.min;
  } else if (Number(value) > max) {
    return _messages.max;
  }
  return false;
}

export const isErrorFiled = validate;

/**
 * Validate the phone number
 */
export const isPhoneNumber = (phone: string): boolean =>
  /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(phone);
