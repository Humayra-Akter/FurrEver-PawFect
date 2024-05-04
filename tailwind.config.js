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
          accent: "#4682B4",
          neutral: "#F5F5F5",
          "base-100": "#000",
        },
      },
    ],
  },
};
