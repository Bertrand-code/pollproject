import { fetchLeaderBoardStat } from "../db";
import { _saveQuestion, _saveQuestionAnswer } from "../db/_DATA";

const initialState = {
  questions: [],
  answers: {},
  leaderboard: null,
};

export default function questionReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case "question_loaded":
      return {
        ...state,
        questions: [...payload.questions],
        answers: { ...state.answers, ...payload.answers },
      };
    case "answer_saved":
      return {
        ...state,
        answers: { ...state.answers, [payload.qid]: payload.answer },
      };
    case "question_saved":
      return {
        ...state,
        questions: [...state.questions, payload],
      };
    case "leaderboard_loaded":
      return {
        ...state,
        leaderboard: payload,
      };

    case "logout":
      return { questions: [], answers: {}, leaderboard: null };

    default:
      return state;
  }
}

export const loadQuestionAction = (questions, answers) => {
  return {
    type: "question_loaded",
    payload: {
      questions,
      answers,
    },
  };
};

export const saveAnswerAction = (qid, answer) => {
  return {
    type: "answer_saved",
    payload: {
      qid,
      answer,
    },
  };
};
const loadLeaderboardAction = (leaderboard) => {
  return {
    type: "leaderboard_loaded",
    payload: leaderboard,
  };
};

const questionSaved = (payload) => {
  return {
    type: "question_saved",
    payload,
  };
};

export const saveQuestionAction = (question) => {
  return async (dispatch, getState) => {
    const { id: userId } = getState().authStore.user;
    const { id } = await _saveQuestion({
      author: userId,
      optionOneText: question.optionOne,
      optionTwoText: question.optionTwo,
    });
    dispatch(questionSaved(id));
  };
};

export const answerQuestion = (qid, answer) => {
  return async (dispatch, getState) => {
    const userId = getState().authStore.user.id;
    _saveQuestionAnswer({ authedUser: userId, qid, answer }).then((res) => {
      if (res) dispatch(saveAnswerAction(qid, answer));
    });
  };
};

export const loadLeaderboard = () => {
  return async (dispatch) => {
    const leaderboard = await fetchLeaderBoardStat();
    dispatch(loadLeaderboardAction(leaderboard));
  };
};
