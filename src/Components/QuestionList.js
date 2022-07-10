import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { _getQuestions } from "../db/_DATA";
import Question from "./Question";

function QuestionList({ usersQuestions, userAnswers }) {
  const [data, setData] = useState(null);
  const doneQue = useRef(0);
  const Que = useRef(0);

  useEffect(() => {
    _getQuestions().then((data) => {
      const sortedData = Object.keys(data)
        .sort((a, b) => {
          return data[b].timestamp - data[a].timestamp;
        })
        .reduce((acc, key) => {
          acc[key] = data[key];
          return acc;
        }, {});
      setData(sortedData);
    });
  }, []);
  return (
    data && (
      <div id="questionList">
        <div>
          <h1>Questions</h1>
          <span>Count {Que.current}</span>
        </div>
        {data &&
          Object.keys(data).map((key) => {
            if (!userAnswers[key]) {
              Que.current++;
              return <Question data={data[key]} key={key} />;
            } else {
              return null;
            }
          })}
        <div>
          <h1>Done</h1>
          <span>Count {doneQue.current}</span>
        </div>
        {data &&
          Object.keys(data).map((key) => {
            if (userAnswers[key]) {
              doneQue.current++;
              return <Question data={data[key]} key={key} />;
            } else {
              return null;
            }
          })}
      </div>
    )
  );
}
const mapStateToProps = (state) => ({
  usersQuestions: state.questionsStore.questions,
  userAnswers: state.questionsStore.answers,
});

export default connect(mapStateToProps)(QuestionList);
