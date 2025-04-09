// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Event.css';

// const EventDetails = () => {
//   const [upcomingEvents, setUpcomingEvents] = useState([]);
//   const [pastEvents, setPastEvents] = useState([]);
//   const navigate = useNavigate();

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

//   const markAttendance = (eventId) => {
//     const attendedEvents = JSON.parse(localStorage.getItem('attendedEvents')) || [];
//     if (!attendedEvents.includes(eventId)) {
//       attendedEvents.push(eventId);
//       localStorage.setItem('attendedEvents', JSON.stringify(attendedEvents));
//     }
//   };

//   const handleFeedbackClick = (event) => {
//     markAttendance(event.id);
//     navigate('/feedback', { state: { eventTitle: event.title } });
//   };

//   const renderEventCard = (event, index) => (
//     <div
//       key={index}
//       className="event-card"
//       style={{ backgroundColor: event.bgColor || '#f0f0f0' }}
//     >
//       <h4>{event.title}</h4>
//       <p><strong>Date:</strong> {event.date}</p>
//       <p><strong>Department:</strong> {event.department}</p>
//       <div className="event-buttons">
//         <button
//           className="details-btn"
//           onClick={() => {
//             markAttendance(event.id);
//             navigate(`/eventdetails/${event.id}`);
//           }}
//         >
//           Details
//         </button>
//         <button
//           className="feedback-btn"
//           onClick={() => handleFeedbackClick(event)}
//         >
//           Feedback
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <div className="event-details-wrapper">
//       <h2>Upcoming Events</h2>
//       <div className="event-scroll-container">
//         {upcomingEvents.length ? (
//           upcomingEvents.map(renderEventCard)
//         ) : (
//           <p>No upcoming events.</p>
//         )}
//       </div>

//       <h3>Past Events</h3>
//       <div className="event-scroll-container">
//         {pastEvents.length ? (
//           pastEvents.map(renderEventCard)
//         ) : (
//           <p>No past events available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default EventDetails;

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

  const markAttendance = (eventId) => {
    const attendedEvents = JSON.parse(localStorage.getItem('attendedEvents')) || [];
    if (!attendedEvents.includes(eventId)) {
      attendedEvents.push(eventId);
      localStorage.setItem('attendedEvents', JSON.stringify(attendedEvents));
    }
  };

  const handleFeedbackClick = (event) => {
    markAttendance(event.id);
    navigate('/feedback', { state: { eventTitle: event.title } });
  };

  const renderEventCard = (event, index) => (
    <div
      key={index}
      className="event-card"
      style={{ backgroundColor: event.bgColor || '#f0f0f0' }}
    >
      <h4>{event.title}</h4>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Department:</strong> {event.department}</p>
      <div className="event-buttons">
        <button
          className="details-btn"
          onClick={() => {
            markAttendance(event.id);
            navigate(`/eventdetails/${event.id}`);
          }}
        >
          Details
        </button>
        <button
          className="feedback-btn"
          onClick={() => handleFeedbackClick(event)}
        >
          Feedback
        </button>
      </div>
    </div>
  );

  return (
    <div className="event-details-wrapper">
      <h2>Upcoming Events</h2>
      <div className="event-scroll-container">
        {upcomingEvents.length ? (
          upcomingEvents.map(renderEventCard)
        ) : (
          <p>No upcoming events.</p>
        )}
      </div>

      <h3>Past Events</h3>
      <div className="event-scroll-container">
        {pastEvents.length ? (
          pastEvents.map(renderEventCard)
        ) : (
          <p>No past events available.</p>
        )}
      </div>
    </div>
  );
};

export default EventDetails;

