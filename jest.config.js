module.exports = {
  setupFilesAfterEnv: [
    "./src/__setup__/setupTests.js"
  ],
  testRegex: "/*.spec.js$",
  testPathIgnorePatterns: ["<rootDir>/node_modules/*"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/styleMock.js"
  }
}