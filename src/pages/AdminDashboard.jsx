import { Link } from 'react-router-dom';
import { FiCalendar, FiUsers, FiClock, FiCheckCircle, FiSettings } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getEvents, getRegistrations } from '../utils/storage';

function AdminDashboard() {
  const events = getEvents();
  const registrations = getRegistrations();
  const today = new Date().toISOString().split('T')[0];
  const upcomingEvents = events.filter((event) => event.date >= today);
  const completedEvents = events.filter((event) => event.status === 'Completed' || event.date < today);
  const stats = [
    { title: 'Total Events', value: events.length, icon: <FiCalendar size={24} />, color: 'violet' },
    { title: 'Upcoming Events', value: upcomingEvents.length, icon: <FiClock size={24} />, color: 'mint' },
    { title: 'Registrations', value: registrations.length, icon: <FiUsers size={24} />, color: 'coral' },
    { title: 'Completed Events', value: completedEvents.length, icon: <FiCheckCircle size={24} />, color: 'gold' }
  ];
  return (
    <>
      <Navbar />
      <main>
        <section className="page-banner">
          <div className="container d-flex flex-wrap justify-content-between align-items-end gap-3">
            <div>
              <span className="section-kicker">Administration</span>
              <h1 className="reveal">Dashboard</h1>
              <p className="mb-0">Manage your events and monitor registrations.</p>
            </div>
            <Link to="/admin/events" className="btn cta-button"><FiSettings /> Manage events</Link>
          </div>
        </section>
        <div className="container pull-up pb-5">
          <div className="row g-4 mb-5">
            {stats.map((stat) => (
              <div className="col-sm-6 col-xl-3" key={stat.title}>
                <div className={`stat-card stat-${stat.color}`}>
                  <div className="stat-icon">{stat.icon}</div>
                  <p>{stat.title}</p>
                  <h2>{stat.value}</h2>
                </div>
              </div>
            ))}
          </div>
          <div className="card glass-card">
            <div className="card-body p-4">
              <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-4">
                <div><h4 className="fw-bold mb-1">Events overview</h4><p className="text-secondary mb-0">View your events and available seats.</p></div>
                <Link to="/admin/events" className="btn btn-ring">View all</Link>
              </div>
              <div className="table-responsive">
                <table className="table align-middle">
                  <thead><tr><th>Event</th><th>Category</th><th>Date</th><th>Available seats</th><th>Registrations</th><th>Status</th></tr></thead>
                  <tbody>
                    {events.length ? events.map((event) => {
                      const count = registrations.filter((r) => r.eventId === event.id).length;
                      const completed = event.status === 'Completed' || event.date < today;
                      return <tr key={event.id}><td className="fw-semibold">{event.title}</td><td>{event.category}</td><td>{event.date}</td><td>{event.seats}</td><td>{count}</td><td><span className={`badge ${completed ? 'text-bg-secondary' : 'text-bg-success'}`}>{completed ? 'Completed' : 'Upcoming'}</span></td></tr>;
                    }) : <tr><td colSpan="6" className="text-center py-4">No events available.</td></tr>}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
export default AdminDashboard;