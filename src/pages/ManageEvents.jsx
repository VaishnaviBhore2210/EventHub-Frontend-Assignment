import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiEdit2, FiTrash2, FiArrowLeft } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getEvents, saveEvents } from '../utils/storage';
const emptyForm = {
  title: '',
  category: 'Technology',
  date: '',
  time: '',
  venue: '',
  seats: '',
  image: '',
  description: '',
  status: 'Upcoming'
};
function ManageEvents() {
  const [events, setEvents] = useState(getEvents);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState('');
  function handleChange(e) { setForm({ ...form, [e.target.name]: e.target.value }); }
  function handleSubmit(e) {
    e.preventDefault(); setMessage('');
    const title = form.title.trim();
const venue = form.venue.trim();
const description = form.description.trim();
const seats = Number(form.seats);

if (!title || !venue || !description) {
  setMessage('Please fill in all required fields.');
  return;
}

if (!Number.isInteger(seats) || seats < 0) {
  setMessage('Available seats must be a whole number of zero or more.');
  return;
}

if (!form.date) {
  setMessage('Please select an event date.');
  return;
}

if (!form.time.trim()) {
  setMessage('Please enter the event time.');
  return;
}
    const eventData = { ...form, seats: Number(form.seats), image: form.image || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80' };
    const updatedEvents = editingId !== null ? events.map((event) => event.id === editingId ? { ...event, ...eventData, id: editingId } : event) : [...events, { ...eventData, id: Date.now() }];
    setEvents(updatedEvents); saveEvents(updatedEvents); setForm(emptyForm); setEditingId(null); setMessage(editingId !== null ? 'Event updated successfully!' : 'Event created successfully!');
  }
function handleEdit(event) {
  setForm({
    title: event.title || '',
    category: event.category || 'Technology',
    date: event.date || '',
    time: event.time || '',
    venue: event.venue || '',
    seats: String(event.seats ?? ''),
    image: event.image || '',
    description: event.description || '',
    status: event.status || 'Upcoming'
  });

  setEditingId(event.id);
  setMessage('');

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
  function handleDelete(id) { if (!window.confirm('Are you sure you want to delete this event?')) return; const updatedEvents = events.filter((event) => event.id !== id); setEvents(updatedEvents); saveEvents(updatedEvents); if (editingId === id) { setEditingId(null); setForm(emptyForm); } setMessage('Event deleted successfully!'); }
  function handleCancel() { setEditingId(null); setForm(emptyForm); setMessage(''); }
  return <><Navbar /><main><section className="page-banner"><div className="container"><Link to="/admin" className="btn-back mb-4"><FiArrowLeft /> Back to dashboard</Link><div><span className="section-kicker">Event management</span></div><h1 className="reveal">Manage events</h1><p className="mb-0">Create, update, and manage your events.</p></div></section><div className="container pull-up pb-5">
    <div className="card glass-card mb-5"><div className="card-body p-4 p-md-5"><h4 className="fw-bold mb-4">{editingId !== null ? 'Edit Event' : 'Create New Event'}</h4>{message && <div className="alert alert-success" role="status">{message}</div>}<form onSubmit={handleSubmit}><div className="row g-3">
      <div className="col-md-6"><label className="form-label fw-semibold">Event Title</label><input name="title" className="form-control" value={form.title} onChange={handleChange} placeholder="Enter event title" required /></div>
      <div className="col-md-6"><label className="form-label fw-semibold">Category</label><select name="category" className="form-select" value={form.category} onChange={handleChange} required><option>Technology</option><option>Business</option><option>Design</option><option>Workshop</option><option>Community</option><option>Learning</option></select></div>
      <div className="col-md-4"><label className="form-label fw-semibold">Date</label><input type="date" name="date" className="form-control" value={form.date} onChange={handleChange} required /></div>
      <div className="col-md-4"><label className="form-label fw-semibold">Time</label><input name="time" className="form-control" value={form.time} onChange={handleChange} placeholder="10:00 AM" required /></div>

 <div className="col-md-4"><label className="form-label fw-semibold">Available Seats</label><input type="number" name="seats" className="form-control" min="0" value={form.seats} onChange={handleChange} placeholder="100" required /></div>
     <div className="col-md-4">
  <label className="form-label fw-semibold">
    Event Status
  </label>

  <select
    name="status"
    className="form-select"
    value={form.status}
    onChange={handleChange}
    required
  >
    <option value="Upcoming">Upcoming</option>
    <option value="Ongoing">Ongoing</option>
    <option value="Completed">Completed</option>
  </select>
</div>
      <div className="col-12"><label className="form-label fw-semibold">Venue</label><input name="venue" className="form-control" value={form.venue} onChange={handleChange} placeholder="Enter event venue" required /></div>
      <div className="col-12"><label className="form-label fw-semibold">Image URL (optional)</label><input type="url" name="image" className="form-control" value={form.image} onChange={handleChange} placeholder="https://example.com/image.jpg" /></div>
      <div className="col-12"><label className="form-label fw-semibold">Description</label><textarea name="description" className="form-control" rows="3" value={form.description} onChange={handleChange} placeholder="Describe the event..." required /></div>
      <div className="col-12 d-flex gap-2 mt-4"><button type="submit" className="btn btn-dark px-4"><FiPlus className="me-2" />{editingId !== null ? 'Update Event' : 'Create Event'}</button>{editingId !== null && <button type="button" className="btn btn-outline-secondary px-4" onClick={handleCancel}>Cancel</button>}</div>
    </div></form></div></div>
    <div className="card glass-card"><div className="card-body p-4"><h4 className="fw-bold mb-4">All Events ({events.length})</h4><div className="table-responsive"><table className="table align-middle"><thead><tr><th>Event</th><th>Category</th><th>Date</th><th>Seats</th><th>Actions</th></tr></thead><tbody>{events.length ? events.map((event) => <tr key={event.id}><td><div className="fw-semibold">{event.title}</div><small className="text-secondary">{event.venue}</small></td><td>{event.category}</td><td>{event.date}</td><td>{event.seats}</td><td><div className="d-flex gap-2"><button type="button" className="btn btn-sm btn-outline-primary" title="Edit event" aria-label={`Edit ${event.title}`} onClick={() => handleEdit(event)}><FiEdit2 /></button><button type="button" className="btn btn-sm btn-outline-danger" title="Delete event" aria-label={`Delete ${event.title}`} onClick={() => handleDelete(event.id)}><FiTrash2 /></button></div></td></tr>) : <tr><td colSpan="5" className="text-center py-4 text-secondary">No events found. Create your first event above.</td></tr>}</tbody></table></div></div></div>
  </div></main><Footer /></>;
}
export default ManageEvents;