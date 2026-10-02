import Chip from './Chip.jsx';
import useDropZone from '../hooks/useDropZone.js';

export default function Tray({ items, readOnly, onMove, onDelete, dnd }) {
  const { over, props } = useDropZone(() => dnd.dropTo(null), readOnly);
  return (
    <div className={`tray${over ? ' over' : ''}`} {...props}>
      {items.length ? (
        items.map((x) => <Chip key={x.id} item={x} readOnly={readOnly} onMove={onMove} onDelete={onDelete} dnd={dnd} />)
      ) : (
        <p className="hint">Nothing waiting. New thoughts land here, then sort them below.</p>
      )}
    </div>
  );
}
