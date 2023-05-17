const path = require("path");

module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: {
    react: { version: "18.2" },
    "import/resolver": {
      alias: {
        map: [
          ["@src", path.resolve(__dirname, "./src")],
          [("@UserCard", path.resolve(__dirname, "./src/components/UserList"))],
          ["@UserList", path.resolve(__dirname, "./src/components/UserList")],
        ],
      },
    },
  },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
  },
};
