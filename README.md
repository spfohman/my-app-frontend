# Getting Started with Create React App

This project was created for phase 3 at Flatiron school. This was built using React, JavaScript, Ruby, Sinatra, HTML, and CSS. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The goal of this project was to incorporate previous React knowledge for a front end app, with new skills to create a backend server. 

With this app the user will come to a landing page with a description about what the app does. This app is used to track books. A user can add a book, like the book, and add a review. The user can click on the "Books" button which will navigate them to a page showing the list of rendered books. Each book is rendered in a div showing the author, title, a like button with the number of likes, a button to choose whether to show or hide the book's reviews, an input field where reviews can be added with a submit button. The list of reviews then also has a button and the user can click this to delete a review. 

At the top of the books list page there is also a feature where the user can type in a book title and the list of books will be filtered to find the book the user is looking for. 
  
The next navigation button is "Add New Books". If clicked the user will transfer to a page where they can add a new book with a title and author. When the submit button is clicked, they are redirected back to the page of rendered books, with the new book added. 

There are two images in the app, both are from [Link](https://unsplash.com/). 
  
Right now in order to run the application, npm start must be run from the "my-app-frontend" directory for the front end. To start the backend, bundle exec rake server must be run from the backend directory. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
