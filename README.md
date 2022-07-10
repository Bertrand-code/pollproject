# Employee Polls Project

This is the starter code for the final assessment project for Udacity's React & Redux course.

The _DATA.js file represents a fake database and methods that let you access the data. The only thing you need to edit in the _DATA.js file is the value of avatarURL. Each user should have an avatar, so you’ll need to add the path to each user’s avatar.

Using the provided starter code, you'll build a React/Redux front end for the application. We recommend using the Create React App to bootstrap the project.

### clone, Download 
Clone or download the project
Run npm install in the project root directory to install dependencies
Run npm start to launch the project. Note: I found npm start.


## Data
 I have used the data given to build the store, reducer and actions of the app:

 Mostly: I fetched the data: Users and questions
In the project directory, you can run:

### For Users

For users: I gave the avator for every user
The user must use his login credentials to access the board, ask a question or give an answer.

The answers are counted as well as questions. 
The user who responded many questions is on the top of leaderboard feature

### NavBAr

The navbar of the app is composed of Leaderboard, Home, new poll and log out

There is a "would rather sentence" before the user chooses between the options one or two.

The percentage of the questions asked or answers given is shown under each user 

### Questions

The questions  have ID, author, timestamp, optionOne and OptionTwo. 
ID: The questions' uniqueness 
Author: User or someone who asked the question
Timestamp: This is when the user asked the question
OptionOne or Two: these are the votes options for the users

### Voting Options

I have used the voting options via the four methods from database:
._getUsers()
._getQuestions()
._saveQuestion(question)
._saveQuestionAnswers(object)
### Interaction

When the user asks a question and want to go to Home Page:
He will see the percentage of the questions answered, the avatar, and the percentage of the answers as well. 

### Sort by date
The questions are classified following the when they are asked, the recent ones are on the top of the page 


