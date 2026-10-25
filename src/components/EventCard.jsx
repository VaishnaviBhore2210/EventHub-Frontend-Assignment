import { Link } from 'react-router-dom';
import { FiClock, FiMapPin, FiArrowRight } from 'react-icons/fi';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function EventCard({ event }) {
  const [, month, day] = String(event.date).split('-');
  const seatsLeft = Number(event.seats);
  const fill = Math.max(4, Math.min(100, (seatsLeft / 120) * 100));
  const low = seatsLeft > 0 && seatsLeft <= 20;
  return (
    <article className="card event-card h-100">
      <div className="card-media">
        <img src={event.image} className="card-img-top" alt={event.title} loading="lazy" />
        <div className="date-badge"><b>{day}</b><small>{MONTHS[Number(month) - 1]}</small></div>
        <span className="cat-tag">{event.category}</span>
      </div>
      <div className="card-body d-flex flex-column">
        <h5>{event.title}</h5>
        <div className="meta-line"><FiClock /> {event.time}</div>
        <div className="meta-line"><FiMapPin /> {event.venue}</div>
        <p className="desc flex-grow-1">{event.description}</p>
        <div className="seat-meter" aria-hidden="true"><i style={{ width: `${seatsLeft > 0 ? fill : 0}%` }} /></div>
        <div className="d-flex justify-content-between align-items-center mt-3 gap-2">
          <span className={`seat-text ${low ? 'low' : ''}`}>{seatsLeft > 0 ? (low ? `Only ${seatsLeft} seats left` : `${seatsLeft} seats available`) : 'Sold out'}</span>
          <Link to={`/events/${event.id}`} className="btn btn-dark">View details <FiArrowRight className="btn-arrow" /></Link>
        </div>
      </div>
    </article>
  );
}
export default EventCard;
