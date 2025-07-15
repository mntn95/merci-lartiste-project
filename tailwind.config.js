/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-primary": "#755018",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
      screens: {
        "3xl": "1640px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
