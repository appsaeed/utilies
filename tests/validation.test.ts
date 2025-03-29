import { isMail, isPhoneNumber, validate } from "../src/index"; // Adjust the path accordingly

describe("isMail", () => {
	test("valid email", () => {
		expect(isMail("test@example.com")).toBe(true);
	});

	test("invalid email", () => {
		expect(isMail("invalid-email")).toBe(false);
	});

	test("email with special characters", () => {
		expect(isMail("user.name+test@example.co.uk")).toBe(false);
	});
});

describe("isPhoneNumber", () => {
	test("valid phone number", () => {
		expect(isPhoneNumber("+1234567890")).toBe(true);
	});

	test("valid phone number with spaces and dashes", () => {
		expect(isPhoneNumber("(123) 456-7890")).toBe(true);
	});

	test("invalid phone number", () => {
		expect(isPhoneNumber("abcd-efgh")).toBe(false);
	});
});

describe("validate", () => {
	test("required field missing", () => {
		expect(validate("username", "")).toBe("The username field is required!");
	});

	test("valid email", () => {
		expect(validate("email", "test@example.com", { email: true })).toBe(false);
	});

	test("invalid email", () => {
		expect(validate("email", "invalid-email", { email: true })).toBe("The email address is not valid: invalid-email");
	});

	test("number below min", () => {
		expect(validate("age", 5, { min: 10 })).toBe("The age field is required at least 10 but riched 5");
	});

	test("number above max", () => {
		expect(validate("age", 15, { max: 10 })).toBe("The age field is riched max value 15 required less than 10");
	});
});
