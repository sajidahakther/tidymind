import { parseKey } from '../utils/date.js';

export default function Header({ viewKey, greeting, readOnly, canPrev, canNext, showHistory, onPrev, onNext, onToday, onToggleHistory }) {
  const d = parseKey(viewKey);
  return (
    <header>
      <div>
        <p className="greet">{greeting}</p>
        <h1>
          {d.toLocaleDateString('en-GB', { weekday: 'long' })}, <em>{d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })}</em>
        </h1>
      </div>
      <div className="nav">
        <button className="pill" disabled={!canPrev} onClick={onPrev} aria-label="Previous day">‹</button>
        <button className="pill" disabled={!readOnly} onClick={onToday}>Today</button>
        <button className="pill" disabled={!canNext} onClick={onNext} aria-label="Next day">›</button>
        <button className="pill" onClick={onToggleHistory}>{showHistory ? 'Hide history' : 'History'}</button>
      </div>
    </header>
  );
}
