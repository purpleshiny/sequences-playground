This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Notes on other things I've done:
- https://github.com/gitname/react-gh-pages to publish to github
- https://react.semantic-ui.com/usage for some nice looking widgets to base the app on

Things I'd do if I had more time:
- use the `prop-types` library to make it clear what props are required for each component and what the types are
- use routes/full-page views to enable the Add Sequence flow to feel like its own page rather than a modal
- separate components into "container" components with state and "pure" components for rendering
- tests for important logic as opposed to manual tests
- actually write data to backend
- pagination to keep page performance reasonable with very large datasets (this is a hunch)
- import/export
- subsequence highlighting in DNA sequences? ask users what they want

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

Builds and deploys app to Github homepage (https://purpleshiny.github.io/sequences-playground/)