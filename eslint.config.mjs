import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Compute __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// FlatCompat allows using legacy ESLint configs
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extend Next.js recommended rules
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Custom overrides
  {
    rules: {
      // Allow "any" usage
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];

export default eslintConfig;
