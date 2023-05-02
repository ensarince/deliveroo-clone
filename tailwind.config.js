module.exports = {
  content: [
            './components/**/*.{js,jsx,ts,tsx}',
            './screens/**/*.{js,jsx,ts,tsx}'
          ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
}