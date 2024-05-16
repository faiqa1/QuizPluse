import React, { useState } from 'react';

const QuizForm = () => {
  const [quizData, setQuizData] = useState({
    quizTitle: '',
    timeLimit: '',
    teacherName: '',
    subjectName: '',
    questions: [],
  });

  const [currentQuestion, setCurrentQuestion] = useState({
    question: '',
    choices: ['', '', '', ''],
    correctAnswer: '',
    marks: '',
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
      question: '',
      choices: ['', '', '', ''],
      correctAnswer: '',
      marks: '',
    });
  };

  const handleUpload = () => {
    // Log the submitted data
    console.log(quizData);
  };

  const handleNextQuestion = () => {
    setQuizData({ ...quizData, questions: [...quizData.questions, currentQuestion] });
    setCurrentQuestion({
      question: '',
      choices: ['', '', '', ''],
      correctAnswer: '',
      marks: '',
    });
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Quiz Title:</label>
          <input
            type="text"
            name="quizTitle"
            value={quizData.quizTitle}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Time Limit:</label>
          <select
            name="timeLimit"
            value={quizData.timeLimit}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Select Time Limit</option>
            {[...Array(35)].map((_, index) => (
              <option key={index} value={(index + 1) * 10}>
                {(index + 1) * 10} minutes
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Teacher Name:</label>
          <input
            type="text"
            name="teacherName"
            value={quizData.teacherName}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Subject Name:</label>
          <input
            type="text"
            name="subjectName"
            value={quizData.subjectName}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Question:</label>
          <input
            type="text"
            value={currentQuestion.question}
            onChange={(e) => setCurrentQuestion({ ...currentQuestion, question: e.target.value })}
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
            onChange={(e) => setCurrentQuestion({ ...currentQuestion, correctAnswer: e.target.value })}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Marks:</label>
          <input
            type="number"
            value={currentQuestion.marks}
            onChange={(e) => setCurrentQuestion({ ...currentQuestion, marks: e.target.value })}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <button type="button" onClick={handleNextQuestion} className="btn btn-secondary mr-2">
            Add more
          </button>
          <button type="submit" onClick={handleUpload} className="btn btn-primary">
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuizForm;
