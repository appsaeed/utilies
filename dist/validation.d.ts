/**
 * validate email address
 */
export declare function isMail(email: string): boolean;
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
export declare function validate(field: string, value: any, options?: Attributes, messages?: Errors): string | false;
export declare const isErrorFiled: typeof validate;
/**
 * Validate the phone number
 */
export declare const isPhoneNumber: (phone: string) => boolean;
export {};
