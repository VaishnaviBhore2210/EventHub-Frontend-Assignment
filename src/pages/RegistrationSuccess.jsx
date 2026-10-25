import { Link, useParams } from 'react-router-dom';
import { FiCheck, FiCalendar, FiMapPin, FiArrowRight } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getEvents } from '../utils/storage';

const COLORS = ['#6c4dff', '#ff6b57', '#ffb547', '#22d3a0', '#9a5cff'];
const PIECES = Array.from({ length: 40 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  background: COLORS[i % COLORS.length],
  animationDuration: `${2.6 + (i % 7) * 0.45}s`,
  animationDelay: `${(i % 9) * 0.12}s`
}));

function RegistrationSuccess() {
  const { id } = useParams();
  const event = getEvents().find((item) => item.id === Number(id));
  return (
    <>
      <Navbar />
      <div className="confetti" aria-hidden="true">{PIECES.map((style, i) => <i key={i} style={style} />)}</div>
      <main className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-6">
            <div className="card glass-card text-center p-4 p-md-5 mt-3">
              <div className="success-ring"><FiCheck size={52} strokeWidth={3} /></div>
              <div><span className="badge-pill mb-3">Registration confirmed</span></div>
              <h1 className="fw-bold mb-3">You're on the list!</h1>
              <p className="text-secondary mb-4">Your spot is saved. See you there.</p>
              {event && (
                <div className="ticket text-start mb-4">
                  <h5 className="fw-bold mb-3">{event.title}</h5>
                  <div className="meta-line"><FiCalendar /> {event.date} · {event.time}</div>
                  <div className="meta-line mb-0"><FiMapPin /> {event.venue}</div>
                </div>
              )}
              <Link to="/" className="btn btn-dark btn-lg align-self-center">Explore more events <FiArrowRight className="btn-arrow" /></Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
export default RegistrationSuccess;
