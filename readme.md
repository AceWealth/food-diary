[![Build Status](https://travis-ci.org/sbycrosz/food-diary.svg)](https://travis-ci.org/sbycrosz/food-diary)

# Food Diary
A digital diary of your daily food intake (Demo: http://sbycrosz.github.io/food-diary)

## Background
I wanted to learn new technologies (react, flux, webpack, etc.) by making something that's more commited than a todo lists. 

## Tech Stacks
-  **ReactJS**: The hottest JS framework today (November 2015) *at the rate we're going will probably be outdated at 2020*
-  **ReduxJS**: The better implementation of Facebook flux. I've played around with my own flux implementation and RefluxJS, but I really like the functional style of ReduxJS. AFAIK it's already being used in production by redmart (https://m.redmart.com/)
-  **Sass**: My preferred CSS Preprocessor (but would go for postCSS with CSS module when starting a new project)
-  **Webpack**: A frontend build tool. It allows you to require styling in your JS making it a complete module
-  **Babel**: A transpiler that allows the usage of new Javascript features. ES6 and beyond add a lot of syntatic sugar that makes the code easier to write.
-  **TravisCI**: A free and easy to use continous integration server. IMO any self respecting project should have a continous integration pipeline. I've setup this project to automatically redeploy for each push to master
-  **Lodash**: A set of utility functions that adds monadic function to Javascript primitives

## Interesting Bits and Pieces
- **Test**: ReduxJS makes it really easy to write unit tests because every action in your app is a function without side effects
- **Dumb Components**: Most component except for top level components are only a function that accepts properties and return HTMLs
- **Webpack**: importing a component (example: "import Spinner;") will import the component and the styles it might need
- **Redux**: Since the applications state are stored in a single tree. Storing data in localstorage is as simple as adding middlewares

## Lazy high level explanations
Stop here if you are not keen on bleeding edge JS. You have been warned

- Redux (http://redux.js.org/) 
  - The whole state of your app is stored in an object tree inside a single store.
  - The only way to change the state tree is to emit an action, an object describing what happened.
  - To specify how the actions transform the state tree, you write pure reducers.
- Actions:
  - SearchFoodActions: contains all actions for searching food from the server
  - AddFoodFormActions: contains all actions for add food form 
  - NavigationActions: contains all actions related to navigations
- Reducers: 
  - AddFood/ : reducer for all state in AddFood page
  - DiaryEntries: reducer for the diary entries
  - RouterAnimation: reducer for router animation direction (a bit hacky/painful to use but looks good)
- Components:
  - Smart Components: Component that's aware of redux & it's store  
    - App: Root component, handle the routing animation
    - AddFood: Handle the add food page
    - FoodDiary: Handle the food diary page
  - Dumb Components: Everything except the one that I mentioned above. They're pretty much just a function that accept properties and returns HTMLs.

## Excuses and Downsides
- Redux is still too hipster
- Writing components, reducer, and actions after doing all this MVC is really awkward
- Some code duplication and not TDD: I'm still learning this framework and this is only a demo project
- Test coverage is not 100%
  - As for now, there's no de facto way of testing react components. It might be good to implement a selenium/casper functional test to test the UI.

