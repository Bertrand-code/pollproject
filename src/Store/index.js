import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import authReducer from "./authReducer";
import questionReducer from "./questionReducer";

export const reducer = combineReducers({
  authStore: authReducer,
  questionsStore: questionReducer,
});

export const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
