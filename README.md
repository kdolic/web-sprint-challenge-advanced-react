# Sprint Challenge: Advanced React - React Plants 🌿

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored some advanced React topics ⚛️. During this sprint, you studied class components, the component lifecycle and class component lifecycle methods, custom hooks, and React Testing Library 🐙. In your challenge this week, you will demonstrate your mastery of these skills by creating an app that will fetch data from a local server using a class component, displaying that data, using a custom hook, and writing tests for your app.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL if you need direction.

_You have **three hours** to complete this challenge. Plan your time accordingly._

## Introduction

In meeting the minimum viable product (MVP) specifications listed below, your project should look like the solution examples below:

[Plant List Page](https://tk-assets.lambdaschool.com/88008802-846c-46bb-8cf8-11ace219e2bf_ScreenShot2020-04-30at12.39.22PM.png)

[Successful Form Submission](https://tk-assets.lambdaschool.com/90ebefd4-ee0f-4b1c-884c-1336ce87441d_ScreenShot2020-04-30at12.40.56PM.png)

You will also need to build the two tests in the `CheckoutForm.test.js` file and make sure they are testing what the test title says they are.

### Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead as the evaluate your solution.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. Explain how to build stateful class components.

- 1.) Declare your class, extend React.Component base class.
- 2.) Set up constructor and state (also can just create state object/array without constructor/super if no props are being passed in)
- 3.) Render function created above return that renders UI and returns JSX
- 4.) Can incorporate DOM events, set/update state any time a change or event triggers from the user's interaction

2. Describe the different phases of the component lifecycle.

- 1.) Birth/Mounting Phase
  - Whatever initial data you want to access will be defined in the constructor
  - Constructor called and state data
  - Receive props and place them on component as state (if needed)
  - Render is invoked
  - componentDidMount() invoked
- 2.) Growth/Update Phase
  - Any new props received from parent will trigger updates to child
  - this.setState - any changes need setState
  - Changes the component data, forcing a new call to the render() function
  - componentDidUpdate()
- 3.) Death/ Unmounting Phase
  - removing the component of the screen
  - 'clean up'
  - componentWillUnmount()

3. Demonstrate an understanding of class component lifecycle methods.

- 1.) Constructor
  - Purpose: create components with inciting state data for the initial render
  - Can pass props directly into constructor and also need to pass super if receiving props
  - 'Before' it gets mounted to the DOM
- 2.) Render
  - Purpose: Used to tell React to return a piece of the DOM/JSX
  - Required when using class components
  - Called during the mounting phase and also updating phase with a rerender of the DOM
  - State and render go hand-in-hand
- 3.) componentDidMount() - invoked once, invoked after render function, set up eventListeners, fetch initial data
- 4.) componentDidUpdate() - fetch new data based on changes to props/state
- 5.) componentWillUnmount() - cleanup of dangerous things that happened in cDM, removed all listeners, warn users

4. Define stateful logic.

- Stateful logic is logic that is built into a component. It can be a function that handles a event or function that sets toggle state.
- Deals with state for that component

5. Describe how to test a React component with React Testing Library.

- Import - import react dependencies, react-testing-methods, the component you will be testing
- Arrange - call the render method and component inside of it, setting up the component
- Act - query the elements you want to test
- Assert - Need assert to assure that the queried element is what it is expected to be, final portion of a test

You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade.

## Instructions

### Task 1: Project Set Up

_This project uses a local server for the data fetching. You will need three seperate terminal windows open:_

1. _one for your server_
2. _one for your React app (in the /client folder)_
3. _and one to run your tests_

_Please follow the setup instructions closely so that you can get everything up and running smoothly_

**Basic set up**

- [ ] Create a forked copy of this project
- [ ] Clone your OWN version of the repository (Not Lambda's by mistake!)
- [ ] [OPTIONAL] Create a new branch: git checkout -b `<firstName-lastName>`. If you choose to do this, you will need to merge your working branch into the master branch and push your final code to master in order for the submission to work with CodeGrade.

\_Note: Ignore the `mocks` directory. That is in place for the CodeGrade tests

**Setting up the CodeGrade webhook**

Go [here](./CodeGrade-webhook.md) to setup the CodeGrade webhook before you begin.

**Starting the server**

- [ ] Run `npm install` to download dependencies for the server.
- [ ] Run the server using `npm start`.
- [ ] Open a new browser tab and navigate to `http://localhost:3333/plants` - if you see a JSON object with plants data, then you know the server is running 👍

**Starting the React app**

- [ ] In a separate terminal cd into the `client` folder and run `npm install` to download dependencies.
- [ ] Still inside the `client` folder run `npm run start` to run the client application.
- [ ] Your browser should open up the project as normal

**Starting your test runner**

- [ ] In the final terminal window, make sure you are in the `client` folder still
- [ ] Start the test runner with `npm test` (I recommend doing this only when you're testing - any change in your app will make the tests run, and that could eat up your computer power)

**Commit and Push OFTEN!**

- [ ] Implement the project on this Branch, **committing progress & changes often.**
- [ ] Push commits: `git push origin master`, or, if working on your own branch: git push origin <firstName-lastName>`.

### Task 2: Project Requirements

Your finished project must include all of the following requirements:

#### Plant List

Display a list of the plants from the server. This should be done in the class component `PlantList`.

- [ ] In the `PlantList` class component, fetch data from the server you now have running - the data can be fetched from `http://localhost:3333/plants`
- [ ] Set the data to a state property called `this.state.plants`
- [ ] The render function is already built and styled. Once the data is on the state, you will see the list of plants, and you will have the functionality to add a plant to the cart

#### Shopping Cart

Nothing needs to be done here. You _will_ have to navigate to the cart page in your app so you can go to the checkout form for the next step.

#### Checkout Form

The form is working, but it is currently controlled by local stateful logic. We want to control this form with a custom hook.

- [ ] Build a custom hook called `useForm`, and use it in your CheckoutForm component to control the form's stateful logic

_Note: You built a useForm hook in the guided project this week. You will probably need to use that as a guide to complete this step. However, try and build it out first before you peek at the guided project. And *do not* copy/paste directly from the guided project!_

#### Testing the Checkout Form

- [ ] Build out the tests listed in `CheckoutForm.test.js`. You will need to make sure they are testing what the test title implies they are testing
- [ ] Make sure the tests are passing, and make sure you can cause the tests to fail purposefully, so that you know the tests are truly working

<hr/>
In your solution, it is essential that you follow best practices and produce clean and professional results. You will be scored on your adherence to proper code style and good organization. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3: Stretch Goals

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

- [ ] Add a filter input to the plant list page.
- [ ] Build and implement another custom hook - a dark mode hook would be great for this project, though you'll have to style the light theme ☀️ 🌙
- [ ] Add a test file for the `ShoppingCart` component and test that it displays plants there (you'll need some mock plant data for the test, and then you can pass that data in as a prop when you call `render` and render the component - see the example below)

```js
const plants = {{}, {}, {}} // with each object being a mock plant
test("displays plants in cart", () => {
  const { getByText } = render(<ShoppingCart cart={plants} />)

  ...

})
```

## Submission format

To submit, simply push your latest commit to the master branch and the CodeGrade webhook you setup will run automatically.
