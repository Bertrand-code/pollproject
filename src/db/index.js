import { _getQuestions, _getUsers } from "./_DATA";

export function login(username, password) {
  return new Promise((resolve, reject) => {
    _getUsers().then((users) => {
      const user = users[username];
      if (user && user.password === password) {
        resolve(user);
      } else {
        reject(new Error("Invalid username or password"));
      }
    });
  });
}

export function getQuestion(id) {
  return new Promise((resolve, reject) => {
    _getQuestions().then((question) => {
      if (question[id]) {
        resolve(question[id]);
      } else {
        reject(new Error("Question not found"));
      }
    });
  });
}
export function fetchLeaderBoardStat() {
  return new Promise((resolve, reject) => {
    _getUsers().then((data) => {
      const stat = Object.values(data)
        .reduce((acc, user) => {
          acc.push({
            id: user.id,
            answers: Object.keys(user.answers).length,
            questions: user.questions.length,
          });
          return acc;
        }, [])
        .sort((a, b) => b.answers + b.questions - (a.answers + a.questions));
      resolve(stat);
    });
  });
}
