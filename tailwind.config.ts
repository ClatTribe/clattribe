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
        primary: "#024687",
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

      // glow animation added here
      keyframes: {
        glow: {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
      },
      animation: {
        glow: "glow 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
