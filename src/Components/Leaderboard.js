import React from "react";

import { connect } from "react-redux/es/exports";
import { useEffect } from "react";
import { loadLeaderboard } from "../Store/questionReducer";

function Leaderboard({ leaderboard, fetchStat }) {
  useEffect(() => {
    fetchStat();
  }, [fetchStat]);
  return (
    <div className="board">
      {leaderboard &&
        leaderboard.map((stat, idx) => (
          <div
            key={idx}
            style={{ display: "flex", alignItems: "center", gap: "20px" }}
          >
            <img
              src={`assets/${stat?.id}.png`}
              alt="avatar"
              style={{ width: "50px" }}
            />
            <div>
              <h1>{stat?.id}</h1>
              <span> Answers :{stat.answers}</span>
              <span> Questions :{stat.questions}</span>
            </div>
          </div>
        ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  leaderboard: state.questionsStore.leaderboard,
});

const mapDispatchToProps = {
  fetchStat: loadLeaderboard,
};
export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);
