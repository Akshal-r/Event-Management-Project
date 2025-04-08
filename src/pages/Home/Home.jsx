// import React from "react";
// import "./Home.css";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="home-container">
//       {/* Banner Section */}
//       <section className="banner">
//         <div className="banner-content">
//           <h1>Join Our Exciting College Events!</h1>
//           <div className="btn-container">
//             <button className="explore-btn" onClick={() => navigate("/events")}>
//               Explore Events
//             </button>
//             <button className="register-btn" onClick={() => navigate("/register")}>
//               Register Now
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Upcoming Events */}
//       <section className="events-section">
//         <h2>Upcoming Events</h2>
//         <div className="events-grid">
//           <div className="event-card">
//             <img src="/assets/digital-workshop.jpg" alt="Digital Marketing Workshop" />
//             <h3>Digital Marketing Workshop</h3>
//             <p><strong>Date:</strong> November 15, 2023</p>
//             <p>Join us for an engaging workshop exploring the latest in digital marketing strategies.</p>
//           </div>

//           <div className="event-card">
//             <img src="/assets/coding-bootcamp.jpg" alt="Coding Bootcamp" />
//             <h3>Coding Bootcamp</h3>
//             <p><strong>Date:</strong> November 20, 2023</p>
//             <p>Enhance your coding skills with our intensive bootcamp designed for all levels.</p>
//           </div>

//           <div className="event-card">
//             <img src="/assets/industry-panel.jpg" alt="Industry Expert Panel" />
//             <h3>Industry Expert Panel</h3>
//             <p><strong>Date:</strong> November 25, 2023</p>
//             <p>Gain insights from industry leaders during our expert panel discussion.</p>
//           </div>
//         </div>
//       </section>

      
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/Data/Events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Failed to load events:", err));
  }, []);

  return (
    <div className="home-container">
      {/* Banner Section */}
      <section className="banner">
        <div className="banner-content">
          <h1>Join Our Exciting College Events!</h1>
          <div className="btn-container">
            <button className="explore-btn" onClick={() => navigate("/events")}>
              Explore Events
            </button>
            <button className="register-btn" onClick={() => navigate("/register")}>
              Register Now
            </button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="events-section">
        <h2>Upcoming Events</h2>
        <div className="events-grid">
          {events.map((event) => (
            <div className="event-card" key={event.id}>
              <img src={event.image} alt={event.title} />
              <h3>{event.title}</h3>
              <p><strong>Date:</strong> {event.date}</p>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
