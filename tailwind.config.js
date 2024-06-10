/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [require("daisyui")],
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         primary: "#800000",
  //         secondary: "#FFD700",
  //         accent: "#0E241A",
  //         neutral: "#F5F5F5",
  //         "base-100": "#000",
  //       },
  //     },
  //   ],
  // },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#660064",
          secondary: "#FFD700",
          neutral: "#0E241A",
        },
      },
      {
        dark: {
          primary: "#800000",
          secondary: "#FFD700",
          neutral: "#FF5733",
        },
      },
    ],
  },
};
