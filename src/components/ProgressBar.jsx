export default function ProgressBar({ done, total }) {
  const pct = total ? Math.round((done / total) * 100) : 0;
  const msg = total === 0 ? 'A clear page. Start with a brain dump.' : pct === 100 ? 'Board cleared. Nicely done.' : `${done} of ${total} done`;
  return (
    <div className="progress">
      <span>{msg}</span>
      <div className="bar"><i style={{ width: pct + '%' }} /></div>
    </div>
  );
}
