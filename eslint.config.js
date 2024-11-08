// eslint.config.js
import { ESLint } from "eslint";

export default new ESLint({
    baseConfig: {
        extends: ["next/core-web-vitals", "next/typescript"],
        // Add any other configurations here
    },
});


/*
.eslintrc.json
{
  "extends": ["next/core-web-vitals", "next/typescript"]
}

*/