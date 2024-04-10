
### Technical requirements

- yarn: ^1.22.19
- node: ^20

### Usage

- Install dependencies using `yarn`
- run `yarn dev` to start the project using dev server;
- run `yarn build` and `yarn preview` to serve the production build;
- run `yarn test` to run tests;

### Implementation details

#### Tech stack

-  [React](https://react.dev/)
-  [Typescript](https://www.typescriptlang.org/)
-  [Vite](https://vitejs.dev/)
-  [Redux toolkit](https://redux-toolkit.js.org/)
-  [Redux toolkit query](https://redux-toolkit.js.org/rtk-query/overview)
-  [Vitest](https://vitest.dev/)
-  [Mock service worker](https://mswjs.io/)
-  [React testing library](https://testing-library.com/docs/react-testing-library/intro/)
-  [Styled components](https://styled-components.com/)

#### Structure

- components: feature components, reusable component library components are not implemented;
- feature: role separation between components and features;
- hooks: reusable hooks;
- mocks: api interaction mock implementation;
- store: global state management with role separation between server state management and browser state management;
- style: global styles;
- type: type definitions;
- main.tsx: entrypoint;

### Task

Implement a list of today's birthdays using Wikipedia "On this day" API.

### Requirements

- Initially there must be a button. Data is fetched and displayed after the button is clicked.
- Entries should be ordered by their year.
- "Loading" message/UI component must be shown while data is being fetched.
- Error modal must be shown when fetching data has failed.
