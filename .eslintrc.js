module.exports = {
  "extends": ["taro/react", 'prettier'],
  "plugins": ['prettier'],
  globals: {
    // BASENAME: true,
  },
  "rules": {
    "prettier/prettier": "error",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  }
}
