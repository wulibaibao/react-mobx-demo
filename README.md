# create-react-app + mobx + yarn 

## Javascript : 

react , 
mobx , 
mobx-react , 
yarn , 
react-app-rewired , 
react-app-rewire-mobx ,
---
### setups  
#### 1. yarn install create-react-app --save -g
#### 2. create-react-app react-mobx-demo
#### 3. yarn add react-app-rewire-mobx react-app-rewired mobx mobx-react --save
#### 4. modify the package.json
```
- //modify 
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test --env=jsdom",
  "eject": "react-scripts eject"
}
+ //add
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test --env=jsdom",
    "eject": "react-app-rewired eject"
  }
```
#### 5. create js file config-overrides.js 
```
const { injectBabelPlugin } = require("react-app-rewired");
const rewireMobX = require("react-app-rewire-mobx");

module.exports = function override(config, env) {
  config = rewireMobX(config, env);

  return config;
};
```
