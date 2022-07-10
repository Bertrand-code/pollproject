import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
} from "./_DATA";

describe("helper functions", () => {
  test("getUser", async () => {
    const data = await _getUsers();
    expect(data).not.toBeNull();
  });
  test("_getQuestions", async () => {
    const data = await _getQuestions();
    expect(data).not.toBeNull();
  });
  test("_saveQuestion", async () => {
    const data = await _saveQuestion({
      optionOneText: "optionOneText",
      optionTwoText: "optionTwoText",
      author: "mtsamis",
    });
    await expect(_saveQuestion()).rejects.toThrow();
    expect(data).not.toBeNull();
    expect(data.optionOne.text).toBe("optionOneText");
    expect(data.optionTwo.text).toBe("optionTwoText");
  });

  test("_saveQuestionAnswer", async () => {
    const data = await _saveQuestionAnswer({
      authedUser: "mtsamis",
      qid: "xj352vofupe1dqz9emx13r",
      answer: "optionOne",
    });
    expect(data).toBeTruthy();
    await expect(_saveQuestionAnswer({})).rejects.toBe(
      "Please provide authedUser, qid, and answer"
    );
  });
});
