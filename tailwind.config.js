/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          darkPrimary: "#800000",
          darkSecondary: "#FFD700",
          darkAccent: "#0E241A",
          darkNeutral: "#F5F5F5",
          "base-1": "#fff",
          primary: "#800000",
          secondary: "#FFD700",
          accent: "#0E241A",
          neutral: "#F5F5F5",
          "base-100": "#000",
        },
      },
    ],
  },
};
