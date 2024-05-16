// QuizInfoForm.js
import React, { useState } from 'react';

const QuizInfoForm = ({ onNext, onSubmit }) => {
  const [formData, setFormData] = useState({
    timeLimit: '',
    teacherName: '',
    subjectName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Time Limit:</label>
        <select
          name="timeLimit"
          value={formData.timeLimit}
          onChange={handleChange}
          className="form-select"
        >
          <option value="">Select Time Limit</option>
          {[...Array(36)].map((_, index) => (
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
          value={formData.teacherName}
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label>Subject Name:</label>
        <input
          type="text"
          name="subjectName"
          value={formData.subjectName}
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Next
      </button>
    </form>
  );
};

export default QuizInfoForm;
