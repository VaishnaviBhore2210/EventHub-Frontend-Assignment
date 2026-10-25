import { useState } from 'react';
import { FiArrowRight, FiCalendar, FiMapPin, FiUsers, FiZap } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';
import SearchFilter from '../components/SearchFilter';
import { getEvents } from '../utils/storage';

function Home() {
  const [events] = useState(getEvents);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('asc');
  const filteredEvents = events
.filter((event) =>
  `${event.title} ${event.category} ${event.description} ${event.venue}`
    .toLowerCase()
    .includes(search.toLowerCase())
)
    .filter((event) => category === 'All' || event.category === category)
    .sort((a, b) => sort === 'asc' ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date));

  return <>
    <Navbar />
    <main>
      <section className="hub-hero">
        <div className="hero-orb hero-orb-one" /><div className="hero-orb hero-orb-two" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> YOUR CITY. YOUR COMMUNITY. YOUR MOMENT.</div>
            <h1>
  Discover events.
  <br />
  <span>Create opportunities.</span>
</h1>

<p>
  Explore industry events, expert-led workshops, and networking experiences
  designed to inspire growth and new connections.
</p>
            <div className="hero-actions"><a href="#events" className="btn hero-primary">Find your next event <FiArrowRight /></a><a href="#events" className="btn hero-secondary">Browse categories</a><span className="hero-note"><FiZap /> Good things happen offline.</span></div>
            <div className="hero-stats"><div><strong>{events.length}+</strong><span>curated events</span></div><div><strong>4</strong><span>ways to connect</span></div><div><strong>100%</strong><span>new experiences</span></div></div>
          </div>
          <div className="hero-art" aria-label="Event community illustration">
            <div className="art-card art-card-main"><img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=85" alt="People enjoying a live event" /><div className="art-caption"><span className="live-dot"/> THE NEXT BIG THING</div></div>
            <div className="art-card art-card-small"><img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=80" alt="People connecting at a workshop" /><div><strong>Meet. Learn. Grow.</strong><small>Find your kind of crowd.</small></div></div>
            <div className="floating-tag"><FiCalendar /><span><strong>Something for everyone</strong><small>Explore what's on</small></span></div>
          </div>
        </div>
        <div className="hero-bottom-line" />
      </section>

      <div className="marquee" aria-hidden="true"><div className="marquee-track">{[0, 1].map((n) => <span key={n}>Technology<span>Business</span><span>Design</span><span>Workshops</span><span>Community</span><span>Learning</span><span>Meetups</span></span>)}</div></div>

      <section className="hub-benefits"><div className="container benefits-grid"><div className="benefit"><span className="benefit-icon"><FiCalendar /></span><span><strong>Experiences worth your time</strong><small>Handpicked events and workshops</small></span></div><div className="benefit"><span className="benefit-icon coral"><FiUsers /></span><span><strong>People with your interests</strong><small>Connect beyond the screen</small></span></div><div className="benefit"><span className="benefit-icon green"><FiMapPin /></span><span><strong>Discover around you</strong><small>Great events in and around Pune</small></span></div></div></section>

      <section id="events" className="container hub-events-section">
        <div className="events-heading"><div><p className="section-kicker">THE GOOD STUFF</p><h2>Find your next <span>favourite.</span></h2><p className="section-subtitle">From big ideas to hands-on workshops, there's a place for you.</p></div><div className="event-count"><strong>{filteredEvents.length.toString().padStart(2, '0')}</strong><span>events to explore</span></div></div>
        <div className="filter-shell"><SearchFilter search={search} setSearch={setSearch} category={category} setCategory={setCategory} sort={sort} setSort={setSort} /></div>
        <div className="row g-4 event-grid">{filteredEvents.length > 0 ? filteredEvents.map((event, index) => <div className="col-md-6 col-lg-4" key={event.id}><EventCard event={event} index={index} /></div>) : <div className="col-12 text-center py-5 empty-events"><h4>No events found just yet</h4><p className="text-secondary">Try a different search or category.</p><button className="btn btn-outline-dark rounded-pill" onClick={() => { setSearch(''); setCategory('All'); }}>Clear filters</button></div>}</div>
      </section>
      <section className="community-cta"><div className="container cta-inner"><div><p className="section-kicker">YOUR NEXT CHAPTER STARTS HERE</p><h2>Don't just hear about it.<br /><span>Be there.</span></h2></div><a href="#events" className="btn cta-button">Explore all events <FiArrowRight /></a></div></section>
    </main>
    <Footer />
  </>;
}
export default Home;
