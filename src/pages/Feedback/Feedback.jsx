import React, { useState } from 'react';
import './Feedback.css';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    eventName: '',
    firstName: '',
    lastName: '',
    activities: [],
    feedback: {
      cultural: '',
      artistic: '',
      audience: ''
    },
    comments: ''
  });

  const categories = [
    'Music', 'History', 'Social', 'Sport',
    'Environment', 'Cinema', 'Food', 'Other'
  ];

  const handleCheckboxChange = (category) => {
    setFormData(prev => {
      const isSelected = prev.activities.includes(category);
      const updated = isSelected
        ? prev.activities.filter(item => item !== category)
        : [...prev.activities, category];
      return { ...prev, activities: updated };
    });
  };

  const handleRadioChange = (section, value) => {
    setFormData(prev => ({
      ...prev,
      feedback: { ...prev.feedback, [section]: value }
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback Submitted:', formData);
    alert("Thank you for your feedback!");
  };

  return (
    <div className="feedback-form-container">
      <h2>Cultural Event Feedback Form</h2>
      <p>Please tell us your feedback!</p>

      <form onSubmit={handleSubmit}>
        <label>Event Name</label>
        <input type="text" name="eventName" value={formData.eventName} onChange={handleInputChange} required />

        <label>Your Name</label>
        <div className="name-inputs">
          <input type="text" name="firstName" placeholder="First" value={formData.firstName} onChange={handleInputChange} required />
          <input type="text" name="lastName" placeholder="Last" value={formData.lastName} onChange={handleInputChange} required />
        </div>

        <label>Cultural nature of activity</label>
        <div className="checkbox-group">
          {categories.map((cat, idx) => (
            <label key={idx}>
              <input
                type="checkbox"
                checked={formData.activities.includes(cat)}
                onChange={() => handleCheckboxChange(cat)}
              />
              {cat}
            </label>
          ))}
        </div>

        <label>Feedback</label>
        <table className="feedback-table">
          <thead>
            <tr>
              <th></th>
              <th>Very Good</th>
              <th>Good</th>
              <th>Fair</th>
              <th>Poor</th>
              <th>Very Poor</th>
            </tr>
          </thead>
          <tbody>
            {['cultural', 'artistic', 'audience'].map((field, index) => (
              <tr key={index}>
                <td>{field === 'cultural' ? 'Cultural Performances' :
                     field === 'artistic' ? 'Artistic Expression' :
                     'Audience Engagement'}</td>
                {['Very Good', 'Good', 'Fair', 'Poor', 'Very Poor'].map((rating, i) => (
                  <td key={i}>
                    <input
                      type="radio"
                      name={field}
                      value={rating}
                      checked={formData.feedback[field] === rating}
                      onChange={() => handleRadioChange(field, rating)}
                      required
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <label>Suggestions or Comments</label>
        <textarea name="comments" value={formData.comments} onChange={handleInputChange}></textarea>

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;

