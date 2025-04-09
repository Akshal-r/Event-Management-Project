// import React, { useEffect, useState } from 'react';
// import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
// import Header from './Components/Header/Header';
// import Footer from './Components/Footer/Footer';

// import Login from './pages/Login/Login';
// import Home from './pages/Home/Home';
// import Register from './pages/Register/Register';
// import Events from './pages/Events/Event';
// import EventDetails from './pages/EventDetails/EventFullDetails';
// import Feedback from './pages/Feedback/Feedback';
// import Admin from './pages/Admin/Admin';
// import ContactPage from './pages/Contact/Contact'; // ✅ Fixed import name

// function App() {
//   const location = useLocation();
//   const isLoginOrRegisterPage = location.pathname === '/login' || location.pathname === '/register';

//   const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isLoggedIn') === 'true');

//   useEffect(() => {
//     const checkAuth = () => {
//       setIsAuthenticated(localStorage.getItem('isLoggedIn') === 'true');
//     };
//     window.addEventListener('storage', checkAuth);
//     return () => window.removeEventListener('storage', checkAuth);
//   }, []);

//   return (
//     <div className="App">
//       {!isLoginOrRegisterPage && <Header isAuthenticated={isAuthenticated} />}
//       <Routes>
//         <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
//         <Route path="/register" element={<Register />} />

//         {/* Protected Routes */}
//         <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
//         <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
//         <Route path="/events" element={isAuthenticated ? <Events /> : <Navigate to="/login" />} />
//         <Route path="/eventdetails/:id" element={isAuthenticated ? <EventDetails /> : <Navigate to="/login" />} />
//         <Route path="/feedback" element={isAuthenticated ? <Feedback /> : <Navigate to="/login" />} />
//         <Route path="/admin" element={isAuthenticated ? <Admin /> : <Navigate to="/login" />} />
//         <Route path="/contact" element={isAuthenticated ? <ContactPage /> : <Navigate to="/login" />} /> {/* ✅ Fixed name */}

//         <Route path="*" element={<div style={{ padding: 20 }}>404 Page Not Found</div>} />
//       </Routes>
//       {!isLoginOrRegisterPage && <Footer />}
//     </div>
//   );
// }

// export default App;

// src/App.jsx
import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Events from './pages/Events/Event';
import EventDetails from './pages/EventDetails/EventFullDetails';
import Feedback from './pages/Feedback/Feedback';
import Admin from './pages/Admin/Admin';
import ContactPage from './pages/Contact/Contact'; // ✅ updated

function App() {
  const location = useLocation();
  const isLoginOrRegisterPage = location.pathname === '/login' || location.pathname === '/register';

  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isLoggedIn') === 'true');

  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(localStorage.getItem('isLoggedIn') === 'true');
    };
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  return (
    <div className="App">
      {!isLoginOrRegisterPage && <Header isAuthenticated={isAuthenticated} />}
      <Routes>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
        <Route path="/events" element={isAuthenticated ? <Events /> : <Navigate to="/login" />} />
        <Route path="/eventdetails/:id" element={isAuthenticated ? <EventDetails /> : <Navigate to="/login" />} />
        <Route path="/feedback" element={isAuthenticated ? <Feedback /> : <Navigate to="/login" />} />
        <Route path="/admin" element={isAuthenticated ? <Admin /> : <Navigate to="/login" />} />
        <Route path="/contact" element={isAuthenticated ? <ContactPage /> : <Navigate to="/login" />} /> {/* ✅ updated */}

        <Route path="*" element={<div style={{ padding: 20 }}>404 Page Not Found</div>} />
      </Routes>
      {!isLoginOrRegisterPage && <Footer />}
    </div>
  );
}

export default App;
