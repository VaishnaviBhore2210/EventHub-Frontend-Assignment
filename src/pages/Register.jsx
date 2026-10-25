import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight, FiUsers } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getEvents, saveEvents, getRegistrations, saveRegistrations } from '../utils/storage';

function Register() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [message, setMessage] = useState('');
  const event = getEvents().find((item) => item.id === Number(id));

  function handleChange(e) { setForm({ ...form, [e.target.name]: e.target.value }); }
  function handleSubmit(e) {
    e.preventDefault(); setMessage('');
    if (!event) { setMessage('Event not found.'); return; }
    const email = form.email.trim().toLowerCase();
    const phone = form.phone.trim();
    if (!form.name.trim()) { setMessage('Please enter your full name.'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setMessage('Please enter a valid email address.'); return; }
    if (!/^[6-9]\d{9}$/.test(phone)) { setMessage('Enter a valid 10-digit Indian mobile number.'); return; }
    const currentEvents = getEvents();
    const currentEvent = currentEvents.find((item) => item.id === event.id);
    if (!currentEvent || currentEvent.seats <= 0) { setMessage('Sorry, this event is full or unavailable.'); return; }
    const registrations = getRegistrations();
    if (registrations.some((r) => r.eventId === event.id && r.email === email)) { setMessage('This email is already registered for this event.'); return; }
    saveRegistrations([...registrations, { id: Date.now(), eventId: event.id, eventTitle: event.title, name: form.name.trim(), email, phone, registeredAt: new Date().toISOString() }]);
    saveEvents(currentEvents.map((item) => item.id === event.id ? { ...item, seats: item.seats - 1 } : item));
    navigate(`/registration-success/${event.id}`);
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="page-banner">
          <div className="container">
            <Link to="/" className="btn-back mb-4"><FiArrowLeft /> Back to events</Link>
            <div><span className="section-kicker">Event registration</span></div>
            <h1 className="reveal">Save your spot.</h1>
            {event && <p className="mb-0">You're registering for <strong>{event.title}</strong></p>}
          </div>
        </section>
        <div className="container pull-up pb-5">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-xl-6">
              <div className="card glass-card">
                <div className="card-body p-4 p-md-5">
                  {event ? (
                    <>
                      <div className="alert alert-light d-flex align-items-center gap-2"><FiUsers /> <span><strong>{event.seats}</strong> seats available</span></div>
                      {message && <div className="alert alert-danger" role="alert">{message}</div>}
                      <form onSubmit={handleSubmit}>
                        <div className="mb-3"><label className="form-label fw-semibold">Full name</label><input type="text" name="name" className="form-control" value={form.name} onChange={handleChange} placeholder="Enter your full name" required /></div>
                        <div className="mb-3"><label className="form-label fw-semibold">Email address</label><input type="email" name="email" className="form-control" value={form.email} onChange={handleChange} placeholder="you@example.com" required /></div>
                        <div className="mb-4"><label className="form-label fw-semibold">Contact number</label><input type="tel" name="phone" className="form-control" value={form.phone} onChange={handleChange} placeholder="10-digit mobile number" maxLength={10} required /></div>
                        <button type="submit" className="btn btn-dark btn-lg w-100" disabled={event.seats <= 0}>{event.seats > 0 ? <>Confirm registration <FiArrowRight className="btn-arrow" /></> : 'Event full'}</button>
                      </form>
                    </>
                  ) : (
                    <>
                      <p className="text-secondary">This event could not be found.</p>
                      <Link to="/" className="btn btn-dark">Browse events</Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
export default Register;
