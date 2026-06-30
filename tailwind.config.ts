import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        edge: {
          black: "#07080A",
          matte: "#0B0D10",
          navy: "#071A33",
          navyLight: "#102A4D",
          line: "#242A33",
          soft: "#B8C1CC",
          muted: "#89939F",
        },
      },
      boxShadow: {
        "edge-soft": "0 18px 60px rgba(0, 0, 0, 0.28)",
      },
    },
  },
  plugins: [],
};

export default config;
