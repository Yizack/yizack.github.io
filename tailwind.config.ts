import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{vue,js,ts}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        slate: {
          100: "#f1eff9",
          200: "#e0d9f3",
          300: "#c9c0eb",
          400: "#7a6fa2",
          500: "#63588a",
          600: "#4d4670",
          700: "#3a3557",
          800: "#29243f",
          900: "#181528"
        },
        green: {
          100: "#cceae8",
          200: "#a8d8d4",
          300: "#84c6bf",
          400: "#22c55e",
          500: "#4a988f",
          600: "#3a7670",
          700: "#2c5754",
          800: "#1f3e3c",
          900: "#142826"
        }
      }
    }
  },
  plugins: []
} satisfies Config;
