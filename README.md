# TODO list

A simple UI list that allows adding, sorting, checking and deleting tasks. Tasks are stored in browser's local storage. Project bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Click [here](https://l-walaszczyk.github.io/todo/) to see a live demo.

## Requirements for running the project

You will need to have [Node v8.10 and npm v5.6 (or their later versions)](https://nodejs.org/en/) installed on your machine to run this project locally.

In the steps described below it will be assumed that you have [Git](https://git-scm.com/downloads) installed.

## Steps to run the project in a development environment

1. In your terminal go to the directory where you would like to store the project folder.
2. Run `git clone https://github.com/l-walaszczyk/todo.git` and go to the `todo` folder.
3. Run `npm install`. Installing can take a few minutes.
4. Run `npm start`. A development build will be compiled and a live server will launch.
5. You should now be able see the application in your browser at [http://localhost:3000/todo](http://localhost:3000/todo).

## Steps to build and run the project locally

Follow the steps below to create your own local build. It is assumed that you have completed at least the steps 1-3 of the chapter above, [running the project in a development environment](steps-to-run-the-project-in-a-development-environment).

1. Open a file `package.json` located in the root directory of the project.
2. Change the `homepage` property (line 5) from `"https://l-walaszczyk.github.io/todo"` to `"."` (that change is required, because the project was configured to be deployed on GitHub Pages).
3. Run `npm run build`. It will create an optimized build of the application in a `build` folder.
4. Open in your browser a file `index.html`, which is located in the `build` folder.

You can learn more about Create React App [from its README](https://github.com/facebookincubator/create-react-app#create-react-app--) and the [User Guide](https://facebook.github.io/create-react-app/).
