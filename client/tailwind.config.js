/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-color": "#00FF7F",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
