import React from 'react'
import { useState } from 'react';
import LeaderBoard from "./LeaderBoard";
import { FaCrown } from "react-icons/fa";

export default function AttemptQuiz() {
    const [quizData, setQuizData] = useState({
        quizTitle: "",
        timeLimit: "",
        teacherName: "",
        subjectName: "",
        questions: [],
      });
    
      const [currentQuestion, setCurrentQuestion] = useState({
        question: "",
        choices: ["", "", "", ""],
        correctAnswer: "",
        marks: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setQuizData({ ...quizData, [name]: value });
      };
    
      const handleChoiceChange = (e, index) => {
        const newChoices = [...currentQuestion.choices];
        newChoices[index] = e.target.value;
        setCurrentQuestion({ ...currentQuestion, choices: newChoices });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const newQuestions = [...quizData.questions, currentQuestion];
        setQuizData({ ...quizData, questions: newQuestions });
        setCurrentQuestion({
          question: "",
          choices: ["", "", "", ""],
          correctAnswer: "",
          marks: "",
        });
      };
    
      const handleUpload = () => {
        // Log the submitted data
        console.log(quizData);
      };
    
      const handleNextQuestion = () => {
        setQuizData({
          ...quizData,
          questions: [...quizData.questions, currentQuestion],
        });
        setCurrentQuestion({
          question: "",
          choices: ["", "", "", ""],
          correctAnswer: "",
          marks: "",
        });
      };
  return (
    <div className="container mt-10 flex">
    <form
      onSubmit={handleSubmit}
      className="h-5/6 w-full text-center bg-purple pt-10 ml-10 mr-5 rounded-lg"
    >
      <div className="flex">
        <div className="form-group text-white font-bold w-1/2 mb-2">
          <label className="pr-2">Quiz Title:</label>
          <input
            type="text"
            name="quizTitle"
            value={quizData.quizTitle}
            onChange={handleChange}
            className="form-input border-none rounded-lg"
          />
        </div>
        <div className="form-group w-1/2">
          <label className="text-white font-bold pr-3">Time Limit:</label>
          <input
            type="number"
            name="timelimit"
            value="120"
            onChange={handleChange}
            className="form-input border-none rounded-lg"
          />
          {/* <select
            name="timeLimit"
            value={quizData.timeLimit}
            onChange={handleChange}
            className="form-select border-none rounded-lg"
          >
            <option value="">Time Limit</option>
            {[...Array(35)].map((_, index) => (
              <option key={index} value={(index + 1) * 10}>
                {(index + 1) * 10} minutes
              </option>
            ))}
          </select> */}
        </div>
      </div>
      <div className="flex mt-2">
        <div className="form-group text-white font-bold">
          <label className="pr-2 pl-11">Teacher Name:</label>
          <input
            type="text"
            name="teacherName"
            value={quizData.teacherName}
            onChange={handleChange}
            className="form-input border-none rounded-lg"
          />
        </div>
        <div className="form-group text-white font-bold">
          <label className="pl-26 pr-2">Subject Name:</label>
          <input
            type="text"
            name="subjectName"
            value={quizData.subjectName}
            onChange={handleChange}
            className="form-input border-none rounded-lg"
          />
        </div>
      </div>

      <div className="form-group mt-7 mb-2 text-left ml-5">
        <label className="text-white font-bold pr-4">Question:</label>
        <input
          type="text"
          value={currentQuestion.question}
          onChange={(e) =>
            setCurrentQuestion({
              ...currentQuestion,
              question: e.target.value,
            })
          }
          className="form-input border-none rounded-lg w-2/3"
        />
      </div>
      <div className="flex flex-wrap">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="form-group w-1/2 text-left mt-5 flex items-center"
          >
            <label className="text-white font-bold pl-4 pr-5">
              Choice {index + 1}:
            </label>
            <input
              type="text"
              value={currentQuestion.choices[index]}
              onChange={(e) => handleChoiceChange(e, index)}
              className="form-input border-none rounded-lg mb-5 w-2/3"
            />
          </div>
        ))}
      </div>
      {/* <div className="flex mt-2 text-left">
        <div className="form-group">
          <label className="text-white font-bold pl-20 pr-2">
            Correct Answer:
          </label>
          <input
            type="text"
            value={currentQuestion.correctAnswer}
            onChange={(e) =>
              setCurrentQuestion({
                ...currentQuestion,
                correctAnswer: e.target.value,
              })
            }
            className="form-input border-none rounded-lg"
          />
        </div>
        <div className="form-group">
          <label className="text-white font-bold pl-12 pr-2">Marks:</label>
          <input
            type="number"
            value={currentQuestion.marks}
            onChange={(e) =>
              setCurrentQuestion({
                ...currentQuestion,
                marks: e.target.value,
              })
            }
            className="form-input border-none rounded-lg"
          />
        </div>
      </div> */}

      <div className="form-group mt-5 mb-3 ml-[60%] font-bold">
        <button
          type="button"
          onClick={handleNextQuestion}
          className="btn btn-secondary mr-2 p-[9px] px-[18px] bg-white text-purple rounded-md font-bold"
        >
          Next
        </button>
        <button
          type="submit"
          onClick={handleUpload}
          className="btn btn-primary mr-2 p-[9px] px-[18px] bg-white text-purple rounded-md font-bold"
        >
          Submit
        </button>
      </div>
    </form>
    <div className="leaderboardWrapper">
      <h3 className="bg-purple text-white h-16 text-center pt-7 font-bold rounded-lg">
        LeaderBoard
        <FaCrown className='crown'/>
      </h3>
      <LeaderBoard />
    </div>
  </div>
  )
}
