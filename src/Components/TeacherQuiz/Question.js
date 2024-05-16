// QuestionForm.js
import React, { useState } from 'react';

const QuestionForm = ({ step, setStep, onSubmit, quizData }) => {
  const [currentQuestion, setCurrentQuestion] = useState({
    question: '',
    choices: ['', '', '', ''],
    correctAnswer: '',
    marks: '',
  });

  const handleChoiceChange = (e, index) => {
    const newChoices = [...currentQuestion.choices];
    newChoices[index] = e.target.value;
    setCurrentQuestion({ ...currentQuestion, choices: newChoices });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuestions = [...quizData.questions, currentQuestion];
    const updatedData = { ...quizData, questions: newQuestions };
    setCurrentQuestion({
      question: '',
      choices: ['', '', '', ''],
      correctAnswer: '',
      marks: '',
    });
    if (step < 5) {
      setStep(step + 1);
    } else {
      onSubmit(updatedData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Question:</label>
        <input
          type="text"
          value={currentQuestion.question}
          onChange={(e) =>
            setCurrentQuestion({
              ...currentQuestion,
              question: e.target.value,
            })
          }
          className="form-input"
        />
      </div>
      {[...Array(4)].map((_, index) => (
        <div key={index} className="form-group">
          <label>Choice {index + 1}:</label>
          <input
            type="text"
            value={currentQuestion.choices[index]}
            onChange={(e) => handleChoiceChange(e, index)}
            className="form-input"
          />
        </div>
      ))}
      <div className="form-group">
        <label>Correct Answer:</label>
        <input
          type="text"
          value={currentQuestion.correctAnswer}
          onChange={(e) =>
            setCurrentQuestion({
              ...currentQuestion,
              correctAnswer: e.target.value,
            })
          }
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label>Marks:</label>
        <input
          type="text"
          value={currentQuestion.marks}
          onChange={(e) =>
            setCurrentQuestion({ ...currentQuestion, marks: e.target.value })
          }
          className="form-input"
        />
      </div>
      <button type="submit" className="btn btn-primary mr-2">
        {step < 5 ? 'Next' : 'Upload'}
      </button>
      {step === 5 && (
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setStep(1)}
        >
          Start Over
        </button>
      )}
    </form>
  );
};

export default QuestionForm;
