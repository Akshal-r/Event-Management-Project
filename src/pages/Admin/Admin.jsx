import React from 'react';
import './Admin.css';

const summaryCards = [
  { title: 'Total Events', count: 2, color: '#1ABC9C', options: ['Add Event', 'View Events', 'Feedback Review'] },
  { title: 'Total Students', count: 9, color: '#F39C12', options: ['Total', 'Feedback', 'Feedback'] },
  { title: 'Feedback', count: 3, color: '#3498DB', options: ['College Event'] },
];

const actionCards = [
  { title: 'View Feedback', icon: '👥', color: '#6C5CE7' },
  { title: 'Manage Students', icon: '👤', color: '#E74C3C' },
  { title: 'Settings', icon: '⚙️', color: '#27AE60' },
];

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <h2>Admin Admin Dashboard Prompt</h2>
      </header>

      <div className="summary-section">
        {summaryCards.map((card, index) => (
          <div className="summary-card" key={index} style={{ backgroundColor: card.color }}>
            <div className="card-count">{card.count}</div>
            <div className="card-title">{card.title}</div>
            <ul className="card-options">
              {card.options.map((opt, i) => (
                <li key={i}>{opt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="action-section">
        {actionCards.map((action, index) => (
          <div className="action-card" key={index} style={{ backgroundColor: action.color }}>
            <span className="action-icon">{action.icon}</span>
            <p>{action.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
