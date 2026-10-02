import burst from '../utils/burst.js';

// A sorted item inside a quadrant
export default function TaskItem({ item, readOnly, onToggle, onMove, onDelete, dnd }) {
  const handleToggle = (e) => {
    if (e.target.checked) burst(e.target);
    onToggle(item.id, e.target.checked);
  };
  return (
    <div className={`it${item.done ? ' done' : ''}`} draggable={!readOnly} onDragStart={(e) => !readOnly && dnd.startDrag(e, item.id)} onDragEnd={dnd.endDrag}>
      <input type="checkbox" className="ck" checked={item.done} onChange={handleToggle} aria-label="Complete" />
      <span className="t">{item.text}</span>
      {item.carried && <span className="tag">carried</span>}
      {!readOnly && (
        <>
          <button className="x" onClick={() => onMove(item.id, null)} title="Back to brain dump" aria-label="Move back to brain dump">↩</button>
          <button className="x" onClick={() => onDelete(item.id)} aria-label="Delete">×</button>
        </>
      )}
    </div>
  );
}
