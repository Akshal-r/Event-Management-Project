// src/pages/EventFullDetails/EventFullDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './EventFullDetails.css';


const EventFullDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch('/Data/EventData.json')
      .then((res) => res.json())
      .then((data) => {
        const allEvents = [...data.upcoming, ...data.past];
        const matchedEvent = allEvents.find((e) => String(e.id) === id);
        setEvent(matchedEvent);
      })
      .catch((error) => console.error('Error fetching event data:', error));
  }, [id]);

  if (!event) return <p>Loading event details...</p>;

  return (
    <div className="event-full-details">
      <h2>{event.title}</h2>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Venue:</strong> {event.venue}</p>
      <p><strong>Department:</strong> {event.department}</p>
      <p><strong>About:</strong> {event.about}</p>

      <h3>Keynote Speakers</h3>
      <div className="speakers-section">
        {event.speakers?.map((speaker, index) => (
          <div className="speaker-card" key={index}>
            <img src={speaker.photo} alt={speaker.name} className="speaker-img" />
            <h4>{speaker.name}</h4>
            <p>{speaker.bio}</p>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default EventFullDetails;
