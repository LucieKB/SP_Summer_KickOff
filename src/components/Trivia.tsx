import { useState } from "react";
import { Radio, Group } from "@mantine/core";
import { triviaQuestions } from "../lib/Trivia";
import "./Trivia.css";

export const Trivia = () => {
  const [current, setCurrent] = useState(0);
  const [grade, setGrade] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <h1>Trivia Time !</h1>
      {current === 0 && grade === "" ? (
        <Radio.Group
          value={grade}
          onChange={setGrade}
          name="Grades"
          label="Select the team's grade"
          description="KinderGartners, Elementary or MiddleSchoolers? "
          withAsterisk
        >
          <Group>
            <Radio type="radio" value="K" label="KinderGarten" />
            <Radio type="radio" value="E" label="Elementary" />
            <Radio type="radio" value="M" label="MiddleSchool" />
          </Group>
        </Radio.Group>
      ) : (
        <>
          <div>
            <p
              style={{
                marginBottom: "20px",
                border: "solid lightblue 1px",
                borderRadius: "18px",
                padding: "10px",
              }}
            >
              <u>Category :</u> {triviaQuestions[current].category}
            </p>
            <div
              style={{
                marginBottom: "20px",
                border: "solid lightblue 1px",
                borderRadius: "18px",
                padding: "10px",
              }}
            >
              <p style={{ marginTop: "0px", padding: "10px" }}>
                <strong>{triviaQuestions[current].question}</strong>
              </p>
              {grade === "E" ? (
                triviaQuestions[current].choicesE.map((ch) => (
                  <li key={ch}>
                    <i>{ch}</i>
                  </li>
                ))
              ) : (
                <i>{triviaQuestions[current].choicesM}</i>
              )}
            </div>
          </div>
          {showAnswer ? (
            <p
              style={{
                marginBottom: "20px",
                border: "solid red 1px",
                borderRadius: "18px",
                padding: "10px",
              }}
            >
              <u>Answer:</u>
              <span> </span>
              <span style={{ color: "red" }}>
                {triviaQuestions[current].answer}
              </span>
            </p>
          ) : (
            <button
              id="answer-btn"
              onClick={() => {
                console.log("click");
                setShowAnswer(!showAnswer);
              }}
            >
              Answer
            </button>
          )}
          <button
            className="trivia-btn"
            onClick={() => {
              setCurrent(current + 1);
              setShowAnswer(false);
            }}
          >
            {" "}
            Next Question{" "}
          </button>
          <button
            className="trivia-btn"
            onClick={() => {
              setCurrent(current - 1);
              setShowAnswer(false);
            }}
          >
            {" "}
            Previous Question{" "}
          </button>
        </>
      )}
    </>
  );
};
