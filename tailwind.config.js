module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '80': '20rem',

      },
      padding: {
        "5/6": '83.3333333'
      }
    },
    customForms: theme => ({
      focusShadow: 'none',
      fucusBorderColor: theme('transperent'),
      checkedColor: theme('colors.indigo.500'),
      checkboxSize: '1.5em',
      radioSize: '1.5em',
      lineHeight: theme('lineHeight.snug'),
      borderColor: theme('transparent'),
      borderRadius: theme('borderRadius.lg'),
      backgroundColor: theme('colors.gray.700'),
      selectIcon: '<svg width="10" height="6" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.293.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4A1 1 0 0 1 1.707.293L5 3.586 8.293.293Z" fill="#fff"/></svg>'
    })
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
};
