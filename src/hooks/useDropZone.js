import { useState } from 'react';

export default function useDropZone(onDrop, disabled) {
  const [over, setOver] = useState(false);
  const props = disabled
    ? {}
    : {
        onDragOver: (e) => { e.preventDefault(); setOver(true); },
        onDragLeave: (e) => { if (!e.currentTarget.contains(e.relatedTarget)) setOver(false); },
        onDrop: (e) => { e.preventDefault(); setOver(false); onDrop(); },
      };
  return { over, props };
}
