import { getTheme, isDark, setTheme, themeIs, themeSchema } from "../src/index";

describe("Theme Functions", () => {
	beforeEach(() => {
		// Clear localStorage before each test
		window.localStorage.clear();
	});

	describe("isDark", () => {
		test("should detect dark schema when device prefers dark mode", () => {
			expect(isDark).toBe(true);
		});
	});

	describe("setTheme", () => {
		test("should set theme to local storage", () => {
			const theme = "dark";
			const storageKey = "user_theme";

			setTheme(theme, storageKey);

			const storedTheme = window.localStorage.getItem(storageKey);
			expect(storedTheme).toBe(theme);
		});

		test("should return the correct theme", () => {
			const theme = "light";
			const result = setTheme(theme);
			expect(result).toBe(theme);
		});
	});

	describe("getTheme", () => {
		test("should return default system theme schema if no theme is stored", () => {
			const result = getTheme("user_theme");
			expect(result).toBe("dark");
		});

		test("should return default schema if stored theme is invalid", () => {
			window.localStorage.setItem("user_theme", "invalid_theme");
			const result = getTheme("user_theme");
			expect(result).toBe("dark");
		});
	});

	describe("themeSchema", () => {
		test("should correctly determine the default theme schema", () => {
			expect(themeSchema).toBe("dark");
		});
	});

	describe("themeIs", () => {
		test("should return true when the theme matches", () => {
			const mode = "dark";
			window.localStorage.setItem("user_theme", mode);
			const result = themeIs(mode);
			expect(result).toBe(true);
		});

		test("should return false when the theme does not match", () => {
			const mode = "light";
			window.localStorage.setItem("user_theme", "dark");
			const result = themeIs(mode);
			expect(result).toBe(false);
		});

		test("should work with a custom schema", () => {
			const mode = "light";
			window.localStorage.setItem("user_theme", "dark");
			const result = themeIs(mode, "light");
			expect(result).toBe(true);
		});
	});
});
