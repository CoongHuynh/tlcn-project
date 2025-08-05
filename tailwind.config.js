/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Design System Colors
        primary: "#090040",
        secondary: "#202083",
        accent: "#eeb74a",
        accent2: "#c4973d",
        accent3: "#f4c876",
        accent4: "#ffe5bb",
        "light-text": "#ffffff",
        "dark-text": "#090040",
        gray: "#b0b0b0",
        "light-background": "#f2f2ff",
        "medium-background": "#e1e1ff",
        "light-border": "#e1e1ff",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
        sans: ["Open Sans", "system-ui", "sans-serif"],
      },
      spacing: {
        1: "0.25rem" /* 4px */,
        2: "0.5rem" /* 8px */,
        3: "0.75rem" /* 12px */,
        4: "1rem" /* 16px */,
        6: "1.5rem" /* 24px */,
        8: "2rem" /* 32px */,
        12: "3rem" /* 48px */,
        16: "4rem" /* 64px */,
        20: "5rem" /* 80px */,
        24: "6rem" /* 96px */,
        32: "8rem" /* 128px */,
      },
      borderRadius: {
        sm: "0.25rem" /* 4px */,
        md: "0.5rem" /* 8px */,
        lg: "0.75rem" /* 12px */,
        xl: "1rem" /* 16px */,
        "2xl": "1.5rem" /* 24px */,
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
      },
      transitionDuration: {
        fast: "0.15s",
        normal: "0.3s",
        slow: "0.5s",
      },
    },
  },
  plugins: [],
};
