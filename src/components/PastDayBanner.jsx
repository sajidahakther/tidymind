export default function PastDayBanner({ onBack }) {
  return (
    <div className="banner">
      <span>You're viewing a past day. It's read only.</span>
      <button className="pill" onClick={onBack}>Back to today</button>
    </div>
  );
}
