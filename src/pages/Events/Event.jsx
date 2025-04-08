// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Event.css';

// const EventDetails = () => {
//   const [upcomingEvents, setUpcomingEvents] = useState([]);
//   const [pastEvents, setPastEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const navigate = useNavigate(); // 👈 Navigation hook

//   useEffect(() => {
//     fetch('/Data/EventData.json')
//       .then((res) => res.json())
//       .then((data) => {
//         setUpcomingEvents(data.upcoming);
//         setPastEvents(data.past);
//       })
//       .catch((error) => {
//         console.error('Error fetching event data:', error);
//       });
//   }, []);

//   const handleFeedbackClick = (event) => {
//     // Optional: pass event ID or name via state or query param
//     navigate('/feedback', { state: { eventTitle: event.title } });
//   };

//   const renderEventCard = (event, index) => (
//     <div
//       key={index}
//       className="event-card"
//       style={{ backgroundColor: event.bgColor }}
//     >
//       <h4>{event.title}</h4>
//       <p>Date: {event.date}</p>
//       <p>Department: {event.department}</p>
//       <div className="event-buttons">
//         <button className="details-btn" onClick={() => setSelectedEvent(event)}>Details</button>
//         <button className="feedback-btn" onClick={() => handleFeedbackClick(event)}>Feedback</button>
//       </div>
//     </div>
//   );

//   // Modal code remains the same...

//   return (
//     <div className="event-details-wrapper">
//       <h2>Upcoming Events</h2>
//       <div className="event-scroll-container">
//         {upcomingEvents.map(renderEventCard)}
//       </div>

//       <h3>Past Events</h3>
//       <div className="event-scroll-container">
//         {pastEvents.map(renderEventCard)}
//       </div>

//       {/* Modal code here... */}
//     </div>
//   );
// };

// export default EventDetails;

// src/pages/Events/Event.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Event.css';

const EventDetails = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/Data/EventData.json')
      .then((res) => res.json())
      .then((data) => {
        setUpcomingEvents(data.upcoming);
        setPastEvents(data.past);
      })
      .catch((error) => {
        console.error('Error fetching event data:', error);
      });
  }, []);

  const handleFeedbackClick = (event) => {
    navigate('/feedback', { state: { eventTitle: event.title } });
  };

  const renderEventCard = (event, index) => (
    <div
      key={index}
      className="event-card"
      style={{ backgroundColor: event.bgColor }}
    >
      <h4>{event.title}</h4>
      <p>Date: {event.date}</p>
      <p>Department: {event.department}</p>
      <div className="event-buttons">
        <button className="details-btn" onClick={() => navigate(`/event/${event.id}`)}>Details</button>
        <button className="feedback-btn" onClick={() => handleFeedbackClick(event)}>Feedback</button>
      </div>
    </div>
  );

  return (
    <div className="event-details-wrapper">
      <h2>Upcoming Events</h2>
      <div className="event-scroll-container">
        {upcomingEvents.map(renderEventCard)}
      </div>

      <h3>Past Events</h3>
      <div className="event-scroll-container">
        {pastEvents.map(renderEventCard)}
      </div>
    </div>
  );
};

export default EventDetails;
