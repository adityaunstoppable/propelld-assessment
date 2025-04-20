○ Setup instructions -> 
 
1. if extracted from zip, IN TERMINAL -> cd over to the folder, then run the command - 'npm install' and then 'npm run dev'.
2. you can get this code from git - https://github.com/adityaunstoppable/propelld-assessment and repeat the same as above.

----------------------------------------------------------------------------------------------------------------

○ Assumptions made ->

1. The project assumes the use of React, Redux-Toolkit, Tailwind CSS for styling and Jest for testing.

2. It is assumed that the user is familiar with basic npm commands to run and install dependencies.

3. The application relies on local storage to store the user's data temporarily as it uses redux-persist

----------------------------------------------------------------------------------------------------------------

○ Any known limitations ->

1. No real backend: The application uses mock services for data, so any real-time updates or persistent storage won’t be available.

2. Limited Responsiveness: Although basic responsiveness is implemented, the UI may not be fully optimized for all screen sizes.

3. The application contains basic unit and integration tests. As I am still learning Jest and React Testing Library, I plan to expand my testing coverage and gain more confidence with unit and E2E tests in the coming weeks.

----------------------------------------------------------------------------------------------------------------

○ How to run tests
- IN TERMINAL, run the command -> npm test, it will run all the tests using Jest.