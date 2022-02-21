module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    customForms: {

    }
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
};
