
# React Starter Kit

<a href="https://github.com/kriasoft/react-starter-kit/stargazers"><img src="https://img.shields.io/github/stars/heyitsvajid/react-starter-kit.svg?style=social&label=Star&maxAge=3600" height="20"></a>
<a href="https://twitter.com/heyitsvajid"><img src="https://img.shields.io/twitter/follow/heyitsvajid.svg?style=social&label=Follow&maxAge=3600" height="20"></a>

This starter kit provides you with the code and conventions you need to get straight into building your React/Redux based app.


## Happiness is six lines away
*Prerequisites: node.js and git*
```
git clone https://github.com/heyitsvajid/react-starter-kit.git <your-repo-name>
cd <your-repo-name>
npm install
npm start
npm run open # (from a different console window, otherwise open localhost:3000)

```  

Awesome, you've got a ready-to-customise application!


## Why use this Standard Starter Kit?

- Your directory structure is sorted as soon as you `git clone`
- ES6 compilation and automatic-reloading development server are configured for you with [webpack](https://webpack.github.io/) and [Babel](https://babeljs.io/)
-  [Redux](http://redux.js.org/) is an incredibly simple way of modelling your data, with great community support
-  [React](https://www.reactjs.org/) is an incredibly simple way of rendering your views, and is maintained by Facebook
- The actors pattern allows you to easily react to changes on your store *without* forcing a re-render
- Your redux store is already configured with navigation, data and view models


## The provided boilerplate is powered by the following technology stack:
- [React](https://reactjs.org/), [Babel](https://babeljs.io/), [ESLint](https://eslint.org/), [Prettier](https://prettier.io/), [Jest](https://jestjs.io/),
  [Webpack v5](https://webpack.js.org/), [Storybook](https://storybook.js.org/), [Husky](https://typicode.github.io/husky/#/)


## Getting Started
#### Put your name on it

- Update name, desription and author in `package.json`
- Update app title in `src/index.html`
- Restart the dev server (make sure to do this after any changes to `src/index.html`)

 
#### Start building
- Add a component for your route in `src/components`
- Add tests for the component in `src/__tests__` with filename convention as `<Component-Name>.test.js`
- Add reducers and actions types for your component's view model in `src/redux/reducer` and `src/redux/actionTypes` if required
- Bask in the glory of your creation
- Don't forget to commit your changes and push to Bitbucket or GitHub!

#### Validate the code changes

- Run `npm run validate` to verify if everything is good.
- This will run 3 scripts internall using `npm-run-all` package.
	1. `format` -> This will formate the code as per ES6 Javascript standard.

	2. `eslint` -> This will run eslint in the `src` directory files and provide any static code issues.

	3. `test` -> This will run all tests and provide the results.

***Note:** Husky prehooks are configured so it will run the `validate` script when you try to commit and stop if any errors.*
  

#### Show your friends
- Run `npm run build` to output a web-ready build of your app to `build`  

## Structure

### Directories
-  `src/__tests__` - All unit tests go here
-  `src/assets/stylesheets` - Helpers for stylesheets for individual components
-  `src/assets/img` - All images goes in here
-  `src/components` - React components, stateless where possible
-  `src/redux` - All reduc reducers and action types are diefined here
-  `src/stories` - Open source tool for building UI components and pages in isolation [Link](https://storybook.js.org/)
-  `src/utils` - General code which isn't specific to your application  

### Other directories:
-  `build` - Intermediate files produced by the development server. Don't touch these.
-  `coverage` - This folder will be generated when you run `npm run cover` script. It will have code coverage details.

 
### Main application files:
-  `index.js` - Your application's top-level React component
-  `public/index.html` - The single page for your single page application
-  `App.js` - The application's entry point
-  `src/assets/stylesheets/index.css` - Global styles for your application

 
### All Scripts

-  `start`: To start the project on local development server

-  `build`: To create production build (`build` folder will be generated)

-  `test`: To run unit tests

-  `cover`: To run test and see coverage results.

-  `storybook`: To run storybook environment

-  `build-storybook`: To build stories

-  `lint`: To run eslint code checking

-  `validate`: To run prettier, eslint and unit tests with one command

-  `format`: To format the files based on ES6 standard


## How to Contribute

Anyone and everyone is welcome to [contribute](.github/CONTRIBUTING.md). Start
by checking out the list of [open issues](https://github.com/heyitsvajid/react-starter-kit/issues)
marked [help wanted](https://github.com/heyitsvajid/react-starter-kit/issues?q=label:"help+wanted").
However, if you decide to get involved, please take a moment to review the
[guidelines](.github/CONTRIBUTING.md).

## License

Copyright © 2021-present heyitsvajid. This source code is licensed under the MIT license found in the
[LICENSE](https://github.com/heyitsvajid/react-starter-kit/blob/main/LICENSE) file.

---

<sup>Made with ♥ by Vajid Kagdi ([@heyitsvajid](https://twitter.com/heyitsvajid), [blog](https://heyitsvajid.hashnode.dev/))
and [contributors](https://github.com/heyitsvajid/react-starter-kit/graphs/contributors).</sup>
