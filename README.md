# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How the project is built

- I used Redux Toolkit as a state managment library. I used Toolkit to avoid writing all the required code that Redux need for setup and also using Redux hooks like useSelector and useDispatch made things sort and easy to use.
- I used Typescript over JS because with Typescirpt ie easier to reafactor the code in the future, is more reliable can help to avoid future errors and also gives great support to IDE.
- I used React Testing Library to write some basic tests.

## Future things to add

- Need to add a pagination in the Hompepage to change page of the items and make a new request to Get the next 10 items to show.
- Need to add the Typescript interfaces.
- Need to add more tests.
- Writing test with mocking requests and data.
- Change test file form js ===> ts.

## Setup Project

In the project directory, you can run:

### `yarn` 

#### OR

### `npm install`

## How to Run


### `yarn start` 

#### OR

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test` 

#### OR

### `npm run test`

#### OR 

- You can test each file separately for example "npm run test -- Header.test.js"

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

