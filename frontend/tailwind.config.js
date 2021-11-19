module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "48px",
        "9/10": "90%",
      },
      minWidth: {
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
