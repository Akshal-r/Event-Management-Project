import React, { useEffect, useState } from 'react';
import './Feedback.css';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    eventName: '',
    name: '',
    registerNumber: '',
    email: '',
    satisfaction: '',
    organization: '',
    speakers: '',
    learning: '',
    suggestions: ''
  });

  const [questions, setQuestions] = useState([]);

  // ✅ Fetch questions dynamically from JSON file
  useEffect(() => {
    fetch('/Data/Feedback.json')
      .then(response => response.json())
      .then(data => setQuestions(data.questions))
      .catch(error => console.error("Error fetching feedback data:", error));
  }, []);

  // ✅ Show feedback reminder if attended but not submitted
  useEffect(() => {
    const attended = localStorage.getItem("attendedEvent");
    const submitted = localStorage.getItem("feedbackSubmitted");
    if (attended && !submitted) {
      alert("You attended an event. Please take a moment to submit your feedback!");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Feedback:", formData);
    localStorage.setItem("feedbackSubmitted", "true");
    alert("Thank you for your valuable feedback!");
  };

  return (
    <div className="feedback-form-container">
      <h2>Event Feedback Form</h2>
      <p>We value your feedback. Please fill out the form below:</p>

      <form onSubmit={handleSubmit}>
        <label>Event Name</label>
        <input type="text" name="eventName" value={formData.eventName} onChange={handleChange} required />

        <label>Your Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Register Number</label>
        <input type="text" name="registerNumber" value={formData.registerNumber} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        {/* ✅ Render fetched feedback questions */}
        {questions.map((q, idx) => (
          <div key={idx}>
            <label>{q.label}</label>
            <select name={q.name} value={formData[q.name]} onChange={handleChange} required>
              <option value="">--Select--</option>
              {q.options.map((opt, i) => (
                <option key={i} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        ))}

        <label>What did you learn or gain from this event?</label>
        <textarea name="learning" rows="3" value={formData.learning} onChange={handleChange} />

        <label>Any suggestions for improvement?</label>
        <textarea name="suggestions" rows="3" value={formData.suggestions} onChange={handleChange} />

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
