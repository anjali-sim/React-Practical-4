const path = require('path')

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
          ["@styled", path.resolve(__dirname, "./src/styled")][
            ("@constants", path.resolve(__dirname, "./src/constants"))
          ][
            ("@UserCard", path.resolve(__dirname, "./src/components/UserList"))
          ][("@Navbar", path.resolve(__dirname, "./src/components/Navbar"))]
          ["@container", path.resolve(__dirname, "./src/container")]
          ["@components", path.resolve(__dirname, "./src/components")]
          ["@CountDetails", path.resolve(__dirname, "./src/components/UserCard/CountDetails")]
          ["@PlanDetails", path.resolve(__dirname, "./src/components/UserCard/PlanDetails")]
      ["@UserInformation", path.resolve(__dirname, "./src/components/UserCard/UserInformation")]
        ],
      },
    },
  },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
  },
};
