import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getQuestion } from "../db";
import { answerQuestion } from "../Store/questionReducer";
import { connect } from "react-redux";

function QuestionPage({ answerQuestion, answers }) {
  const { question_id } = useParams();
  const [choice, setChoice] = useState(answers[question_id]);
  const [question, setQuestion] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getQuestion(question_id)
      .then((question) => {
        setQuestion(question);
      })
      .catch(() => {
        navigate("/sasas");
      });
  }, [question_id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    answerQuestion(question_id, choice);
    navigate("/");
  };
  const total =
    question?.optionOne?.votes?.length + question?.optionTwo?.votes?.length;

  const handleChange = (e) => {
    setChoice(e.target.value);
  };

  return (
    question && (
      <div className="optionsForm">
        <h1>Would You rather</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="options"
            type="radio"
            name="options"
            id="optionOne"
            value={"optionOne"}
            onChange={handleChange}
            checked={choice === "optionOne"}
            disabled={!!answers[question_id]}
          />
          <label htmlFor="optionOne">{question?.optionOne?.text}</label>
          <br />
          <input
            type="radio"
            className="options"
            name="options"
            id="optionTwo"
            value={"optionTwo"}
            onChange={handleChange}
            checked={choice === "optionTwo"}
            disabled={!!answers[question_id]}
          />
          <label htmlFor="optionTwo">{question?.optionTwo?.text}</label> <br />
          <button disabled={!!answers[question_id]} className="btn">
            Vote
          </button>
        </form>
        <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          Asked By{" "}
          <img
            src={`/assets/${question?.author}.png`}
            alt="avatar"
            style={{ width: "50px" }}
          />{" "}
          {question.author}
        </span>
        <span>
          Option one vote count:
          {((question?.optionOne?.votes?.length / total) * 100 || 0).toFixed(1)}
          %
        </span>
        <span>
          Option one vote count:
          {((question?.optionTwo?.votes?.length / total) * 100 || 0).toFixed(1)}
          %
        </span>
      </div>
    )
  );
}
const mapStateToProps = (state) => {
  return {
    answers: state.questionsStore.answers,
  };
};
const mapDispatchToProps = {
  answerQuestion,
};
export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage);
