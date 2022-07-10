import React from "react";
import { useState } from "react";
import { saveQuestionAction } from "../Store/questionReducer";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchLeaderBoardStat } from "../db";

function NewPoll({ saveQuestion }) {
  const navigate = useNavigate();
  const [question, setQuestion] = useState({
    optionOne: "",
    optionTwo: "",
  });

  const handleChange = (e) => {
    setQuestion({
      ...question,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveQuestion(question);
    navigate("/");
  };

  return (
    <div>
      <form className="newPollForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="inputElement"
          placeholder="Option One"
          name="optionOne"
          onChange={handleChange}
        />
        <input
          className="inputElement"
          type="text"
          placeholder="Option Two"
          name="optionTwo"
          onChange={handleChange}
        />
        <button className="btn">Add</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = {
  saveQuestion: saveQuestionAction,
  updateLeaderBoard: fetchLeaderBoardStat,
};
export default connect(null, mapDispatchToProps)(NewPoll);
