[![Build Status](https://travis-ci.org/sbycrosz/food-diary.svg)](https://travis-ci.org/sbycrosz/food-diary)

# Food Diary
A digital diary of your daily food intake (Demo: http://sbycrosz.github.io/food-diary)

## Background
I wanted to learn new technologies (react, flux, webpack, etc.) by making something that's more commited than a todo lists. 

## Tech Stacks
-  **ReactJS**: The hottest JS framework today (November 2015)
-  **ReduxJS**: The better implementation of Facebook flux. I've played around with my own flux implementation and RefluxJS, but I really like the functional style of ReduxJS. AFAIK it's already being used in production by redmart (https://m.redmart.com/)
-  **Sass**: My preferred CSS Preprocessor
-  **Webpack**: A frontend build tool. It allows you to import styling in your JS file, thus making your component a module complete with styling
-  **Babel**: A transpiler that allows the usage of new Javascript features. ES6 and beyond add a lot of syntatic sugar that makes the code easier to write.
-  **TravisCI**: A free and easy to use continous integration server. IMO any self respecting project should have a continous integration pipeline. I've setup this project to automatically redeploy for each push to master
-  **Lodash**: A set of utility functions that adds monadic function to Javascript primitives

## High Level Explanations and Interesting Bits
- **Webpack**: Importing a component (example: "import Spinner;") will import the component and the styles it might need
- **Test**: ReduxJS makes it really easy to write unit tests because every reducer in your app is a function without side effects
- **Redux** (http://redux.js.org/) 
  - The whole state of your app is stored in an object tree inside a single store.
  - The only way to change the state tree is to emit an action, an object describing what happened.
  - To specify how the actions transform the state tree, you write pure reducers.
- **Actions**
  - SearchFoodActions: contains all actions for searching food from the server
  - AddFoodFormActions: contains all actions for add food form 
  - NavigationActions: contains all actions related to navigations
- **Reducers**
  - AddFood/ : reducer for all state in AddFood page
  - DiaryEntries: reducer for the diary entries
  - RouterAnimation: reducer for router animation direction (a bit hacky/painful to use but it does look good)
- **Middleware**: A set of utilities that could be attached to a store. In this project I am using a middleware that saves *diaryEntries* into the localStorage
- **Components**
  - Smart Components: Component that's aware of redux & it's store:  
    - App: Root component, handle the routing animation
    - AddFood: Handle the add food page
    - FoodDiary: Handle the food diary page
  - Dumb Components: Everything except the one mentioned above. They are just a function that accept properties and returns HTMLs.

## Excuses, Downsides, and Rants
- Redux is still too hipster, there's no set best practices yet and not a lot real world project examples
- Writing components, reducer, and actions is really a different experience from doing your normal MV*. People with no React/Flux experience will need time to ramp up 
- The project is not written with TDD: I'm still learning this framework and this is only a demo project
- It might be good to implement a Selenium/Casper functional test to test the UI.

