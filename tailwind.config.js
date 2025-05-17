/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "slide-in": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-out": {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(100%)", opacity: "0" },
        },
        "zoom-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "zoom-out": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0.95)", opacity: "0" },
        },
        "bounce-in": {
          "0%": { transform: "scale(0.3)", opacity: "0" },
          "50%": { transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "bounce-out": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "30%": { transform: "scale(0.9)", opacity: "0.9" },
          "50%": { transform: "scale(1.05)", opacity: "0.8" },
          "100%": { transform: "scale(0.3)", opacity: "0" },
        },
        "flip-in": {
          "0%": {
            transform: "perspective(400px) rotateX(90deg)",
            opacity: "0",
          },
          "100%": { transform: "perspective(400px) rotateX(0)", opacity: "1" },
        },
        "flip-out": {
          "0%": { transform: "perspective(400px) rotateX(0)", opacity: "1" },
          "100%": {
            transform: "perspective(400px) rotateX(90deg)",
            opacity: "0",
          },
        },
        wave: {
          "0%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out forwards",
        "fade-out": "fade-out 0.3s ease-out forwards",
        "slide-in": "slide-in 0.3s ease-out forwards",
        "slide-out": "slide-out 0.3s ease-out forwards",
        "zoom-in": "zoom-in 0.3s ease-out forwards",
        "zoom-out": "zoom-out 0.3s ease-out forwards",
        "bounce-in":
          "bounce-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards",
        "bounce-out":
          "bounce-out 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards",
        "flip-in": "flip-in 0.3s ease-out forwards",
        "flip-out": "flip-out 0.3s ease-out forwards",
        wave: "wave 1.5s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [],
};
