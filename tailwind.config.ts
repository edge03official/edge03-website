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
          black: "#F6F4EF",
          matte: "#ECEFF1",
          navy: "#1F354A",
          navyLight: "#6C8294",
          line: "#D9DEE3",
          soft: "#5D6B78",
          muted: "#7B8894",
        },
      },
      boxShadow: {
        "edge-soft": "0 18px 44px rgba(31, 53, 74, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
