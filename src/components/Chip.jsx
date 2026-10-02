import { QUADRANTS } from '../data/quadrants.js';

// An unsorted item waiting in the brain-dump tray
export default function Chip({ item, readOnly, onMove, onDelete, dnd }) {
  return (
    <div className="chip" draggable={!readOnly} onDragStart={(e) => !readOnly && dnd.startDrag(e, item.id)} onDragEnd={dnd.endDrag}>
      <span className="t">{item.text}</span>
      {item.carried && <span className="tag">carried over</span>}
      {!readOnly && (
        <>
          <span className="sort">
            {QUADRANTS.map((q) => (
              <button key={q.id} data-q={q.id} onClick={() => onMove(item.id, q.id)}>{q.name}</button>
            ))}
          </span>
          <button className="x" onClick={() => onDelete(item.id)} aria-label="Delete">×</button>
        </>
      )}
    </div>
  );
}
