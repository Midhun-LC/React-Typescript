# React-Typescript
This is a very simple project exploring the set up of react with typescript

## key points to understand
When you use typescript, there are 2 ways to go about it while bundling the code  
1. Use babel-loader to convert typescript to javascript, use typescript only for type checking  
2. Use ts-loader to covert/transpile typescript code to javascript, and not use babel at all  

### This repo tries to use only babel-loader and its plugins and presets to work with typescript

Its not a very easy set up and you may not understand all the configurations.  

but in a very layman term,   
1. we install typescript in our project  
2. we install type definitions for react, react-dom and node to catch compile time errors in our IDE  
3. During webpack build we use babel-loader to convert our typescript to javascript that browsers can understand. `the babel.config.json` file holds the information related to what presets needs to be used with babel loader to aid this transpiling or transformation.