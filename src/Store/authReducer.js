import { login } from "../db";
import { loadQuestionAction } from "./questionReducer";

const initialValues = {
  user: null,
  auth: false,
  loading: false,
  error: null,
};

export default function authReducer(state = initialValues, { type, payload }) {
  switch (type) {
    case "user_logged":
      return { ...state, auth: true, user: payload };
    case "loading":
      return { ...state, loading: !state.loading };
    case "error":
      return { ...state, error: payload };
    case "logout":
      return { ...state, auth: false, user: null };
    default:
      return state;
  }
}

const loginAction = (payload) => ({ type: "user_logged", payload });
const loadingAction = () => ({ type: "loading" });
export const logoutAction = () => ({ type: "logout" });
export const userLogin = (userInfo) => async (dispatch) => {
  dispatch(loadingAction());
  try {
    const { answers, questions, ...rest } = await login(
      userInfo.username,
      userInfo.password
    );
    dispatch(loginAction(rest));
    dispatch(loadQuestionAction(questions, answers));
  } catch (error) {
    dispatch(loadingAction());
    dispatch({ type: "error", payload: error.message });
  }
};
