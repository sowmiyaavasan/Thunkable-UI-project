## Features added

1. Add a new project
2. Edit a project
3. Delete a project

#### Additional Features added

4. Implemented a redux store to handle states
5. Added few tests
   - tests for the `header` component in `components/Header/tests/`
   - test for `addProject` reducer in `behaviors/actions/tests/`

## Design decisions taken while building this project

#### Component-based architecture:

1. Each component is contained in its own folder inside along with its own style sheets.
2. This ensures reusability and well structured development.

#### Redux state management:

1. Applying redux ensures single source of truth for different states of the application.

#### Using constants:

1. Used `constants.ts` to store global variables so these can be easily updated at one place when there's a change.

#### TypeScript enabled:

1. Applied typeScript to catch type errors and early detection of errors during development.

#### Adding comments on code:

1. Added comments in the code to understand:
   - The purpose of each component
   - The use of every state and function defined
   - What UI element each component contains
2. This will make the code easier to read and follow.
