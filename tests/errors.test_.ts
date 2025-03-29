import { catchError, catchOR, catchOrNull, errorToString, errorsToString, extractError, extractErrors } from "../src/index";

describe("Error Handling Functions", () => {
	describe("errorToString", () => {
		test("should return a comma-separated string for an array of errors", () => {
			const error = ["Error 1", "Error 2", "Error 3"];
			const result = errorToString(error);
			expect(result).toBe("Error 1,Error 2,Error 3");
		});

		test("should return a JSON string for an object error", () => {
			const error = { message: "Something went wrong" };
			const result = errorToString(error);
			expect(result).toBe(JSON.stringify(error));
		});

		test("should return the string representation of a simple error", () => {
			const error = "Simple error";
			const result = errorToString(error);
			expect(result).toBe(error);
		});

		test("should handle errors during conversion", () => {
			const error = () => {
				throw new Error("Conversion failed");
			};
			const result = errorToString(error);
			expect(result).toBe(String(error));
		});
	});

	describe("errorsToString", () => {
		test("should combine multiple errors into a single string", () => {
			const errors = ["Error 1", { message: "Error 2" }];
			const result = errorsToString(...errors);
			expect(typeof result).toBe("string");
		});
	});

	describe("catchOrNull", () => {
		test("should return result of calling function if no error occurs", () => {
			const calling = () => "Success";
			const result = catchOrNull(calling);
			expect(result).toBe("Success");
		});

		test("should return null if an error occurs and no callback is provided", () => {
			const calling = () => {
				throw new Error("Error");
			};
			const result = catchOrNull(calling);
			expect(result).toBeNull();
		});

		test("should call the callback with the error when an error occurs", () => {
			const callback = jest.fn();
			const calling = () => {
				throw new Error("Error");
			};
			catchOrNull(calling, callback);
			expect(callback).toHaveBeenCalledWith(expect.any(Error));
		});
	});

	describe("catchOR", () => {
		test("should return result of calling function if no error occurs", () => {
			const calling = () => "Success";
			const result = catchOR(calling, "Default Value");
			expect(result).toBe("Success");
		});

		test("should return the provided default value if an error occurs and no callback is provided", () => {
			const calling = () => {
				throw new Error("Error");
			};
			const result = catchOR(calling, "Default Value");
			expect(result).toBe("Default Value");
		});

		test("should return the provided default value and call the callback if an error occurs", () => {
			const callback = jest.fn();
			const calling = () => {
				throw new Error("Error");
			};
			const result = catchOR(calling, "Default Value", callback);
			expect(result).toBe("Default Value");
			expect(callback).toHaveBeenCalledWith(expect.any(Error));
		});
	});

	describe("catchError", () => {
		test("should return null if no error occurs", () => {
			const calling = () => true;
			const result = catchError(calling);
			expect(result).toBeNull();
		});

		test("should return the error if an error occurs", () => {
			const calling = () => {
				throw new Error("Error");
			};
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const result: any = catchError(calling);
			expect(result).toBeInstanceOf(Error);
			expect(result?.message).toBe("Error");
		});
	});

	describe("extractError", () => {
		test("should return the string representation of a single error", () => {
			const error = { message: "Something went wrong" };
			const result = extractError(error);
			expect(result).toBe(JSON.stringify(error));
		});
	});

	describe("extractErrors", () => {
		test("should return a comma-separated string of errors", () => {
			const errors = ["Error 1", ["Error 3"]];
			const result = extractErrors(...errors);
			console.log("Result:: ", result);
			expect(result).toContain("Error 1, Error 3");
		});
	});
});
