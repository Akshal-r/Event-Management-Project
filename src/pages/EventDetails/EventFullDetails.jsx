import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./EventFullDetails.css";
 // Make sure your CSS is included

const EventFullDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/Data/EventData.json')
      .then((res) => res.json())
      .then((data) => {
        const allEvents = [...data.upcoming, ...data.past];
        const matchedEvent = allEvents.find((e) => String(e.id) === id); // Force string comparison
        setEvent(matchedEvent);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching event data:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading event details...</p>;
  if (!event) return <p>Event not found.</p>;

  return (
    <div className="event-details" style={{ backgroundColor: event.bgColor || '#f5f5f5' }}>
      <h1>{event.title}</h1>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Venue:</strong> {event.venue}</p>
      <p><strong>Department:</strong> {event.department}</p>
      <p>{event.about}</p>

      <h2>Speakers</h2>
      <div className="speakers">
        {event.speakers.map((speaker, index) => (
          <div key={index} className="speaker-card">
            <img src={speaker.photo} alt={speaker.name} />
            <h3>{speaker.name}</h3>
            <p>{speaker.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventFullDetails;
