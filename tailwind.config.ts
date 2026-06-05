import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#fbfaf7",
          100: "#f5f1e9",
          200: "#ece5d6",
        },
        navy: {
          50: "#eef1f7",
          100: "#dce2ee",
          200: "#bcc7dc",
          600: "#2b3c5c",
          700: "#1b2840",
          800: "#121b2e",
          900: "#0a1120",
          950: "#060b16",
        },
        gold: {
          100: "#f6eedb",
          200: "#ecdcb6",
          300: "#ddc488",
          400: "#cdab6b",
          500: "#bd9a55",
          600: "#9c7d3c",
          700: "#7c6230",
        },
        ink: {
          600: "#4a505a",
          700: "#363b44",
          800: "#1f242c",
          900: "#10141a",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "Apple SD Gothic Neo",
          "Malgun Gothic",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "75rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(10,17,32,0.04), 0 8px 24px -12px rgba(10,17,32,0.12)",
        lift: "0 18px 40px -18px rgba(10,17,32,0.35)",
        glow: "0 0 0 1px rgba(205,171,107,0.35), 0 20px 50px -20px rgba(189,154,85,0.45)",
        inset: "inset 0 1px 0 rgba(255,255,255,0.06)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(120% 120% at 80% 0%, rgba(205,171,107,0.18) 0%, rgba(10,17,32,0) 45%), radial-gradient(100% 100% at 0% 100%, rgba(43,60,92,0.5) 0%, rgba(10,17,32,0) 50%)",
        "gold-line":
          "linear-gradient(90deg, transparent, rgba(205,171,107,0.6), transparent)",
        "gold-text": "linear-gradient(135deg, #ecdcb6 0%, #cdab6b 50%, #9c7d3c 100%)",
      },
      letterSpacing: {
        tighter: "-0.03em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in": "fade-in 0.8s ease both",
        float: "float 6s ease-in-out infinite",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22,1,0.36,1)",
      },
    },
  },
  plugins: [],
};

export default config;
