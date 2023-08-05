# Tips and Tricks learned along the way

## Navigation
- Useful series for React Native 
- Stack Nav RN APP Tutorial: https://www.youtube.com/watch?v=cS4PgI3zBzY&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ&index=20
- Navigation Pages live in dir routes>homeStack.js

## Downgrading Module
- start by changing version in package.json then reinstall "npm install"
- Edge case ex: for some reason this always installs to version 4 regardless of what is in my package.json file.  solution is to install the correct version:
- - "npm install react-native-reanimated@3.3.0"
- - then double check using command (NPM and YARN versions below)
- - - npm list react-native-reanimated
- - - yarn list react-native-reanimated

