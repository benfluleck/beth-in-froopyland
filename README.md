Front-end challenge
===================

Your goal is to design a responsive skill editor React component. Design for the task is provided [in Invision](https://invis.io/M6KHQTYEQ4D).

There are three screens in this prototype: Desktop view, Mobile view and Different form states.

A mock API server with seed data is provided in this repo - run that by `npm run api`. `/skills` endpoint accepts basic CRUD operations. More information in [`json-server` repo](https://github.com/typicode/json-server).

## Implementation instructions

- Skills have a minimum length of 4 characters and a maximum length of 255 characters;
- Responsiveness of the UI is mandatory;
- The dropdown menu can be a simple browser default HTML select-option component. _No need for custom dropdowns_;
- UI doesn't need to be pixel-perfect. Your UI should look nice and have a similar user experience to that described in the design;
- Add skills and delete skills functionality are mandatory.

## Submission instructions

- Use any platform to host the git repo for the project and share the URL with us. Use your preferred git flow. Make the commit messages meaningful on master branch;
- Don't name the project with straightforward names like `front-end-challenge-jobbatical`. Create a random one for the project, such as `thanos-on-fire`, `summer-is-here`;
- In the `README.md` file, give us instructions to run the project, share details you want us to know before looking at your solution.

## Preferred technology stack

- React,
- Redux and its supporting libraries (redux-thunk or redux-saga, etc.),
- SCSS/LESS,
- Webpack (production build, dev setup),
- font-awesome or similar icon library if needed,
- Lodash if needed,
- Testing (Jest/Mocha/Chai/Enzyme).

Remarks:

- Babel (ES6, ES7. Don't use ES5 syntax),
- Prefer promises, async/await is OK,
- Eslint/Prettier (for code linting),
- Do **not** use jQuery or any similar library.

## Evaluation criteria (in order of importance)

- Code organisation (React application structure),
- Code readability (including comments),
- Commit history - structure and quality,
- Responsiveness and UI behaviour,
- Adherence to the tech stack described above,
- Completeness,
- Test coverage.

## README file Instructions

- How to run the project?
- How long did it take you to finish it?
- What would you have done if time permitted?
- Don't provide any data related to the task which is searchable easily through web search (eg., `jobbatical front end` or similar search shouldn't list your task repo in Github).
