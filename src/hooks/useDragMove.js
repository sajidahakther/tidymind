import { useRef } from 'react';

// Drag an item and drop it on a quadrant (or the tray, where q = null)
export default function useDragMove(move) {
  const dragId = useRef(null);
  return {
    startDrag: (e, id) => {
      dragId.current = id;
      e.dataTransfer.effectAllowed = 'move';
      try { e.dataTransfer.setData('text/plain', id); } catch (_) {}
    },
    endDrag: () => { dragId.current = null; },
    dropTo: (q) => {
      if (dragId.current) move(dragId.current, q);
      dragId.current = null;
    },
  };
}
