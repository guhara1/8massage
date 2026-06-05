import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef1f6",
          100: "#d4dbe8",
          600: "#26344f",
          700: "#1d2940",
          800: "#162033",
          900: "#0f1626",
        },
        gold: {
          100: "#f5ecd8",
          400: "#c9a86a",
          500: "#b3914f",
          600: "#977838",
        },
        ink: {
          700: "#2b2f36",
          800: "#1f2329",
          900: "#14171c",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Apple SD Gothic Neo",
          "Pretendard",
          "Malgun Gothic",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
