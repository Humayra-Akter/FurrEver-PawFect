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
          primary: "#2E8B57",
          secondary: "#FFD700",
          accent: " #FF69B4",
          neutral: "#F5F5F5",
          complementary: "#4682B4",
          "base-100": "#d9d7ca",
        },
      },
    ],
  },
};
