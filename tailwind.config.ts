import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#024687',
        // secondary: '#f6c52a',
      },
      fontFamily: {
        montserrat: "var(--font-montserrat)",
        raleway: "var(--font-raleway)",
        merriweather: "var(--font-merriweather)",
        lato: "var(--font-lato)",

        // Optional aliases for clarity
        heading: "var(--font-montserrat)",
        body: "var(--font-lato)",
      },
    },
  },
  plugins: [],
};

export default config;
