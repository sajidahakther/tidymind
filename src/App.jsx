import { useState } from 'react';
import BrandBar from './components/BrandBar.jsx';
import Header from './components/Header.jsx';
import PastDayBanner from './components/PastDayBanner.jsx';
import ProgressBar from './components/ProgressBar.jsx';
import BrainDumpInput from './components/BrainDumpInput.jsx';
import Tray from './components/Tray.jsx';
import Matrix from './components/Matrix.jsx';
import History from './components/History.jsx';
import useMatrixStore from './hooks/useMatrixStore.js';
import useDragMove from './hooks/useDragMove.js';
import useViewer from './hooks/useViewer.js';
import { getGreeting } from './utils/date.js';

export default function App() {
  const store = useMatrixStore();
  const viewer = useViewer();
  const dnd = useDragMove(store.move);
  const [showHistory, setShowHistory] = useState(false);

  const { view, today, keys, items, readOnly } = store;
  const idx = keys.indexOf(view);
  const unsorted = items.filter((x) => !x.q);
  const goToday = () => store.setView(today);
  const handlers = { onMove: store.move, onToggle: store.toggle, onDelete: store.remove, dnd };

  return (
    <div className="wrap">
      <BrandBar viewer={viewer} onHome={goToday} />
      <Header
        viewKey={view}
        greeting={readOnly ? 'A look back' : getGreeting(viewer?.name)}
        readOnly={readOnly}
        canPrev={idx > 0}
        canNext={idx < keys.length - 1}
        showHistory={showHistory}
        onPrev={() => store.setView(keys[idx - 1])}
        onNext={() => store.setView(keys[idx + 1])}
        onToday={goToday}
        onToggleHistory={() => setShowHistory((s) => !s)}
      />
      {readOnly && <PastDayBanner onBack={goToday} />}
      <ProgressBar done={items.filter((x) => x.done).length} total={items.length} />
      <div className={readOnly ? 'ro' : ''}>
        {!readOnly && <BrainDumpInput onAdd={store.add} />}
        {(unsorted.length > 0 || !readOnly) && <Tray items={unsorted} readOnly={readOnly} {...handlers} />}
        <Matrix items={items} readOnly={readOnly} {...handlers} />
      </div>
      {showHistory && (
        <History
          keys={keys}
          days={store.days}
          view={view}
          today={today}
          onGo={(k) => { store.setView(k); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        />
      )}
    </div>
  );
}
