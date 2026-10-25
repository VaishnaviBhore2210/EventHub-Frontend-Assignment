import { FiSearch } from 'react-icons/fi';

export const CATEGORIES = ['All', 'Technology', 'Business', 'Design', 'Workshop', 'Community', 'Learning'];

function SearchFilter({ search, setSearch, category, setCategory, sort, setSort }) {
  return (
    <>
      <div className="row g-3">
        <div className="col-md-8 position-relative">
          <FiSearch className="position-absolute" style={{ left: 30, top: 18, color: 'var(--violet)', zIndex: 2 }} />
          <input type="search" className="form-control" style={{ paddingLeft: 44 }} placeholder="Search events, venues, topics..." value={search} onChange={(e) => setSearch(e.target.value)} aria-label="Search events" />
        </div>
        <div className="col-md-4">
          <select className="form-select" value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort events">
            <option value="asc">Date: Earliest first</option>
            <option value="desc">Date: Latest first</option>
          </select>
        </div>
      </div>
      <div className="chip-row" role="group" aria-label="Filter by category">
        {CATEGORIES.map((c) => (
          <button key={c} type="button" className={`chip ${category === c ? 'active' : ''}`} onClick={() => setCategory(c)} aria-pressed={category === c}>{c === 'All' ? 'All categories' : c}</button>
        ))}
      </div>
    </>
  );
}
export default SearchFilter;
