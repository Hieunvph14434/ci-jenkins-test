import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  {
    rules: {
        semi: ["error", "never"]
    }
  },
  {
    rules: {
        semi: ["warn", "always"]
    }
  },
  {
    ignores: [] // ignores check eslint file
  }
];