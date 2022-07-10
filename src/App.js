import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Store";
import LoginComponent from "./Components/Logincomponent";
import QuestionList from "./Components/QuestionList";
import QuestionPage from "./Components/QuestionPage";
import NewPoll from "./Components/NewPoll";
import Leaderboard from "./Components/Leaderboard";
import Navbar from "./Components/Navbar";
import Auth from "./Components/Auth";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" index element={<LoginComponent />} />
          <Route element={<Auth />}>
            <Route element={<Navbar />}>
              <Route path="/questions" element={<QuestionList />} />
              <Route
                path="/questions/:question_id"
                element={<QuestionPage />}
              />
              <Route path="/add" element={<NewPoll />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/" element={<Navigate to={"/questions"} />} />
              <Route path="*" element={<h1>404</h1>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
