import TaskItem from './TaskItem.jsx';
import useDropZone from '../hooks/useDropZone.js';

export default function Quadrant({ quadrant, items, readOnly, onToggle, onMove, onDelete, dnd }) {
  const { over, props } = useDropZone(() => dnd.dropTo(quadrant.id), readOnly);
  return (
    <section className={`q${over ? ' over' : ''}`} data-q={quadrant.id} {...props}>
      <h2>{quadrant.name}</h2>
      <p>{quadrant.sub}</p>
      {items.map((x) => (
        <TaskItem key={x.id} item={x} readOnly={readOnly} onToggle={onToggle} onMove={onMove} onDelete={onDelete} dnd={dnd} />
      ))}
    </section>
  );
}
