import { addSlash, pathJoin, queryTojson, seoToString, textToSeo, unSlash, unSlashL, unSlashR, url } from "../src/index";

describe("textToSeo", () => {
	test("convert text to SEO-friendly URL", () => {
		expect(textToSeo("Hello World! & More")).toBe("hello-world-and-more");
	});

	test("remove special characters", () => {
		expect(textToSeo("Cafe & Bar")).toBe("cafe-and-bar");
	});
});

describe("seoToString", () => {
	test("convert SEO URL to readable string", () => {
		expect(seoToString("hello-world-and-more")).toBe("hello world and more");
	});
});

describe("unSlash", () => {
	test("remove slashes from both ends", () => {
		expect(unSlash("/path/to/resource/")).toBe("path/to/resource");
	});
});

describe("unSlashL", () => {
	test("remove leading slash", () => {
		expect(unSlashL("/leading/slash")).toBe("leading/slash");
	});
});

describe("unSlashR", () => {
	test("remove trailing slash", () => {
		expect(unSlashR("trailing/slash/")).toBe("trailing/slash");
	});
});

describe("addSlash", () => {
	test("ensure trailing slash", () => {
		expect(addSlash("path/to/resource")).toBe("path/to/resource/");
	});
});

describe("pathJoin", () => {
	test("join multiple paths", () => {
		expect(pathJoin("users", "123", "profile")).toBe("users/123/profile");
	});
});

describe("queryTojson", () => {
	test("convert query string to JSON", () => {
		expect(queryTojson("name=John&age=30")).toEqual({ name: "John", age: "30" });
	});

	test("handle invalid query string", () => {
		expect(queryTojson("invalid")).toBe(null);
	});
});

describe("url", () => {
	test("construct URL with query parameters", () => {
		expect(url("/users", "123")).toContain("/users/123");
		expect(url(["hello", "world"])).toContain("hello/world");
		expect(url("hello", "world")).toContain("hello/world");
		expect(url("hello", "world")).toContain("hello/world");
		expect(url("/users", "111", { ref: "abc" })).toContain("/users/111?ref=abc");
		expect(url("/portal", "pages", { title: "abc" })).toContain("/portal/pages?title=abc");
	});
});
