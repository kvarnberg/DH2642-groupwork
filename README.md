# project-joke
This is a project built in the course DH2642 by Jasmine Mohamed, Josephine Kvarnberg, Julia Huang and Sara Nazeriha.

Short description of your project:
This project is a joke app. In order to use the app the user needs to log in. If they don’t have an account they can create a new one. When logged in, the user can access all functionalities that the joke app offers. In this app the user can search for jokes in the API, get random jokes from the API and make their own jokes. It is also possible to save jokes and then view, edit or delete them in the user profile. 
 
What you have done so far:
 The user is able to:
 - create a profile and log in
 - make API calls by searching for jokes and saving them to their personal database
 - Create their own jokes and add them to the database
 - Delete the added/saved jokes
 - Edit the saved and created jokes
 - Toggle between pages in the navigation bar
 Other:
 - Set up firebase
 - Calling the API, from both random and search
 - Login authentication from firebase
 - Database storage in firebase
 - Hosting in firebase via: https://project-joke-6bbc1.web.app/
 - to test the application, please sign up a user. you can use a fake email, it doesn't matter.
 
Your project file structure (short description/purpose of each file):
 - Our project is initialized in the src-folder in App.js. The components are called from within App.js and are stored in a components folder, with separate folders for each component file and its css, etc.
 - Config folder is where the firebase is initialized and is exported to the rest of the components.
 
 - Homepage is one file of a component, that calls on the random components file.
 - Random is a component that renders a random joke from the api and presents it. Button for new joke and button for saving the current joke to the user list.
  
 - Nav is a separate component that is called from each “page” component.
 
 - Profile is a component that shows the jokes list that the user has. It also shows the user information.
 - Jokes is the component where a user can make their own jokes and add them to the users joke list.
 - Search is where the user can search the api for jokes, based on search terms.
 
 - Login is the component that renders the form for login and sign up. It is connected to the firebase auth service and takes      in email and password. It presents errors from auth if something is wrong.
 
 - In the public folder the index.html is stored.
 - Index.html has html code for the root-div where we attach all the other components.
 - The build folder was initialized to deploy the application to hosting in firebase. 
