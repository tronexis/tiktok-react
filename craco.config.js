// const BabelRcPlugin = require('@jackwilsdon/craco-use-babelrc');

// module.exports = {
//   plugins: [
//     { plugin: BabelRcPlugin },
//   ],
// };

// module.exports = {
//   babel: {
//     plugins: ["babel-plugin-styled-components", "babel-plugin-macros"],
//   },
// };

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
