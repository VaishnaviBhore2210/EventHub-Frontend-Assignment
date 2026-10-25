import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight, FiCalendar, FiClock, FiMapPin, FiUsers } from 'react-icons/fi';
import { getEvents } from '../utils/storage';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function EventDetails() {
  const { id } = useParams();
  const event = getEvents().find((item) => item.id === Number(id));
  return (
    <>
      <Navbar />
      {!event ? (
        <main className="container py-5 text-center">
          <h2>Event not found</h2>
          <p className="text-secondary">This event may have been removed.</p>
          <Link to="/" className="btn btn-dark mt-3">Back to events</Link>
        </main>
      ) : (
        <main>
          <section className="page-banner">
            <div className="container">
              <Link to="/" className="btn-back mb-4"><FiArrowLeft /> Back to events</Link>
              <div><span className="section-kicker">{event.category}</span></div>
              <h1 className="reveal">{event.title}</h1>
            </div>
          </section>
          <div className="container pull-up pb-5">
            <div className="row g-5 align-items-start">
              <div className="col-lg-7"><div className="detail-hero"><img src={event.image} alt={event.title} /></div></div>
              <div className="col-lg-5">
                <div className="card glass-card p-4 p-md-5">
                  <span className="badge-pill align-self-start mb-3">{event.category}</span>
                  <p className="text-secondary mb-0">{event.description}</p>
                  <div className="info-grid">
                    <div className="info-tile"><FiCalendar /><div><small>Date</small><b>{event.date}</b></div></div>
                    <div className="info-tile"><FiClock /><div><small>Time</small><b>{event.time}</b></div></div>
                    <div className="info-tile"><FiMapPin /><div><small>Venue</small><b>{event.venue}</b></div></div>
                    <div className="info-tile"><FiUsers /><div><small>Seats left</small><b>{event.seats}</b></div></div>
                  </div>
                  <Link to={`/register/${event.id}`} className={`btn btn-dark btn-lg w-100 ${event.seats <= 0 ? 'disabled' : ''}`} aria-disabled={event.seats <= 0}>
                    {event.seats > 0 ? <>Register for event <FiArrowRight className="btn-arrow" /></> : 'Event full'}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
      <Footer />
    </>
  );
}
export default EventDetails;
