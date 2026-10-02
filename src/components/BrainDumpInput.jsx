import { useState } from 'react';

export default function BrainDumpInput({ onAdd }) {
  const [text, setText] = useState('');
  const submit = () => {
    const t = text.trim();
    if (!t) return;
    onAdd(t);
    setText('');
  };
  return (
    <div className="dump">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && submit()}
        placeholder="Brain dump: what's on your mind?"
        autoComplete="off"
        maxLength={140}
      />
      <button onClick={submit}>Add</button>
    </div>
  );
}
