module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-scroll-snap"),
    require("tailwind-scrollbar-hide"),
  ],
};
