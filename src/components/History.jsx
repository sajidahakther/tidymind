import { parseKey } from '../utils/date.js';

export default function History({ keys, days, view, today, onGo }) {
  return (
    <div className="hist">
      <h3>Your days</h3>
      <div className="days">
        {keys.slice().reverse().map((k) => {
          const list = days[k].items;
          const done = list.filter((x) => x.done).length;
          const pct = list.length ? (done / list.length) * 100 : 0;
          return (
            <button key={k} className={`day${k === view ? ' on' : ''}`} onClick={() => onGo(k)}>
              <b>
                {parseKey(k).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })}
                {k === today ? ' · today' : ''}
              </b>
              <span>{done} of {list.length} done</span>
              <div className="bar"><i style={{ width: pct + '%' }} /></div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
