import { useState, useEffect } from 'react';
import { keyOf, uid } from '../utils/date.js';

const KEY = 'eisenhower-matrix-v1'; // same key and shape as the HTML version, so saved data carries over

function loadDays() {
  try {
    const r = JSON.parse(localStorage.getItem(KEY));
    if (r && r.days) return r.days;
  } catch (e) {}
  return {};
}

// Make sure today exists; carry over unfinished items from the latest earlier day
function withToday(days, today) {
  if (days[today]) return days;
  const prev = Object.keys(days).filter((k) => k < today).sort().pop();
  const carry = prev
    ? days[prev].items.filter((i) => !i.done).map((i) => ({ ...i, id: uid(), carried: true }))
    : [];
  return { ...days, [today]: { items: carry } };
}

export default function useMatrixStore() {
  const [today, setToday] = useState(() => keyOf(new Date()));
  const [days, setDays] = useState(() => withToday(loadDays(), keyOf(new Date())));
  const [view, setView] = useState(today);

  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify({ days })); } catch (e) {}
  }, [days]);

  // Fresh page at midnight, or when the tab wakes up on a new day
  useEffect(() => {
    const tick = () => {
      const t = keyOf(new Date());
      if (t === today) return;
      setDays((d) => withToday(d, t));
      setView((v) => (v === today ? t : v));
      setToday(t);
    };
    const id = setInterval(tick, 60000);
    const onVis = () => { if (!document.hidden) tick(); };
    document.addEventListener('visibilitychange', onVis);
    return () => { clearInterval(id); document.removeEventListener('visibilitychange', onVis); };
  }, [today]);

  const update = (fn) => setDays((d) => ({ ...d, [view]: { items: fn(d[view].items) } }));

  return {
    today,
    view,
    setView,
    days,
    keys: Object.keys(days).sort(),
    items: days[view].items,
    readOnly: view !== today,
    add: (text) => update((l) => [...l, { id: uid(), text, q: null, done: false }]),
    move: (id, q) => update((l) => l.map((x) => (x.id === id ? { ...x, q } : x))),
    toggle: (id, done) => update((l) => l.map((x) => (x.id === id ? { ...x, done } : x))),
    remove: (id) => update((l) => l.filter((x) => x.id !== id)),
  };
}
