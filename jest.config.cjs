module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src", "<rootDir>/tests"],
  setupFilesAfterEnv: ["<rootDir>/tests/setup.ts"]
};
