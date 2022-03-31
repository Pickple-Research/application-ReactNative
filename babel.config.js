module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    "babel-plugin-styled-components",
    [
      "module-resolver",
      {
        "root": [
          "."
        ],
        "alias": {
          "@App": "./src/App",
          "@Axios": "./src/Axios",
          "@Component": "./src/Component",
          "@Constant": "./src/Constant",
          "@Navigator": "./src/Navigator",
          "@Resource": "./src/Resource",
          "@Screen": "./src/Screen",
          "@Theme": "./src/Theme",
          "@Util": "./src/Util",
          "@Zustand": "./src/Zustand",
        },
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.json',
          '.tsx',
          '.ts',
          '.native.js',
        ],
      }
    ]],
};
