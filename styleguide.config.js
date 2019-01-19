const path = require('path')

module.exports = {
  sections: [
    {
      name: 'Atoms',
      components: 'client/src/components/UI/atoms/**/[A-Z]*.jsx',
    },
    {
      name: 'Molecules',
      components: 'client/src/components/UI/molecules/**/[A-Z]*.jsx',
    },
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'client/src/styles/ThemeWrapper/ThemeWrapper'),
  },
}
