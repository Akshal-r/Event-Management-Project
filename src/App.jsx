

// src/App.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Events from './pages/Events/Event';
import EventDetails from './pages/EventDetails/EventFullDetails';
import Feedback from './pages/Feedback/Feedback';
import Admin from './pages/Admin/Admin';
import Contact from './pages/Contact/Contact';

function App() {
  const location = useLocation();
  const isLoginOrRegisterPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="App">
      {!isLoginOrRegisterPage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {!isLoginOrRegisterPage && <Footer />}
    </div>
  );
}

export default App;
