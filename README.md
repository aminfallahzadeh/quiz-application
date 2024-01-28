# React Quiz Application

## Overview

This is a simple React quiz application designed to test your knowledge. The application fetches questions from a remote server and provides a user-friendly interface for answering questions within a specified time limit.

## Features

- **Start Screen:** A welcoming screen that displays the number of questions in the quiz.
- **Loading Screen:** While fetching questions from the server, a loader is displayed to keep the user informed.
- **Error Screen:** If there is an issue fetching questions, an error screen is shown with relevant information.
- **Quiz Screen:** The main screen where users can answer questions, see their progress, and manage their time using a countdown timer.
- **Finish Screen:** Displays the user's score, the maximum possible score, and the high score achieved.

## Components

The application is built with several components:

- **Header:** The header of the application.
- **Main:** The main container that houses different screens based on the application's status.
- **Loader:** A loading indicator.
- **Error:** An error message display.
- **StartScreen:** The initial screen that allows users to start the quiz.
- **Question:** Displays a single quiz question.
- **NextButton:** Allows users to move to the next question.
- **Progress:** Shows the user's progress in the quiz.
- **FinishScreen:** Displays the final score and high score achieved.
- **Timer:** A countdown timer for each question.
- **Footer:** The footer of the application.

## State Management

The application uses React Hooks (`useReducer` and `useEffect`) for state management. The state is initialized with various properties such as the list of questions, the current status of the quiz, the user's score, and more. Actions are dispatched to update the state based on user interactions and events.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository `git clone https://github.com/amin-dev-tech/quiz-application.git`
2. Install dependencies using `npm install`.
3. Run the application using `npm run dev`.

## Data Source

The quiz questions are fetched from a remote server. The API endpoint used for fetching questions is: `https://good-gray-chameleon-vest.cyclic.cloud/questions`.

## Credits

This quiz application was created with ❤️ by Amin Fallahzadeh.

Feel free to contribute, report issues, or suggest improvements! Happy quizzing! 🚀
