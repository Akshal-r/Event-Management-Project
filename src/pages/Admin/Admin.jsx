import React, { useState } from 'react';
import './Admin.css';

const summaryCards = [
  {
    title: 'Total Events',
    count: 2,
    color: '#1ABC9C',
    options: ['Add Event', 'View Events', 'Feedback Review']
  },
  {
    title: 'Total Students',
    count: 9,
    color: '#F39C12',
    options: ['Total', 'Feedback']
  },
  {
    title: 'Feedback',
    count: 3,
    color: '#3498DB',
    options: ['College Event']
  }
];

const actionCards = [
  { title: 'View Feedback', icon: '👥', color: '#6C5CE7' },
  { title: 'Manage Students', icon: '👤', color: '#E74C3C' },
  { title: 'Settings', icon: '⚙️', color: '#27AE60' }
];

const AdminDashboard = () => {
  const [feedbackUsers, setFeedbackUsers] = useState([]);
  const [showFeedbackList, setShowFeedbackList] = useState(false);

  const handleViewFeedback = async () => {
    try {
      const response = await fetch('/data/feedback.json');
      const data = await response.json();
      const usernames = data.map((entry) => entry.name);
      setFeedbackUsers(usernames);
      setShowFeedbackList(true);
    } catch (error) {
      console.error('Error fetching feedback:', error);
    }
  };

  return (
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <h2>Admin Dashboard</h2>
      </header>

      <div className="summary-section">
        {summaryCards.map((card, index) => (
          <div className="summary-card" key={index} style={{ backgroundColor: card.color }}>
            <div className="card-count">{card.count}</div>
            <div className="card-title">{card.title}</div>
            <ul className="card-options">
              {card.options.map((opt, i) => (
                <li key={i}>
                  <button className="card-button">{opt}</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="action-section">
        {actionCards.map((action, index) => (
          <div
            className="action-card"
            key={index}
            style={{ backgroundColor: action.color }}
            onClick={action.title === 'View Feedback' ? handleViewFeedback : null}
          >
            <span className="action-icon">{action.icon}</span>
            <p>{action.title}</p>
          </div>
        ))}
      </div>

      {showFeedbackList && (
        <div className="feedback-user-list">
          <h3>Users who submitted feedback:</h3>
          <ul>
            {feedbackUsers.map((user, index) => (
              <li key={index}>{user}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
