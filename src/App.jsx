import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import Register from './pages/Register';
import RegistrationSuccess from './pages/RegistrationSuccess';
import AdminDashboard from './pages/AdminDashboard';
import ManageEvents from './pages/ManageEvents';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/register/:id" element={<Register />} />
        <Route path="/registration-success/:id" element={<RegistrationSuccess />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/events" element={<ManageEvents />} />
        <Route path="*" element={<main className="container py-5 text-center"><h1 style={{ fontSize: "clamp(5rem,18vw,10rem)", background: "var(--grad-brand)", WebkitBackgroundClip: "text", color: "transparent" }}>404</h1><h2>Page not found</h2><a href="/" className="btn btn-dark mt-3">Back to home</a></main>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;