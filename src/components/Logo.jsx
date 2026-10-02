export default function Logo() {
  return (
    <svg viewBox="0 0 34 34" aria-hidden="true">
      <g opacity=".78">
        <circle cx="9" cy="9" r="7" fill="var(--do-d)" />
        <rect x="18" y="2" width="14" height="14" rx="5" fill="var(--plan-d)" />
        <path d="M9 19.5l4.8 2.75v5.5L9 30.5l-4.8-2.75v-5.5Z" fill="var(--delegate-d)" stroke="var(--delegate-d)" strokeWidth="3" strokeLinejoin="round" />
        <path d="M25 21l5 8.5H20Z" fill="var(--drop-d)" stroke="var(--drop-d)" strokeWidth="3" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
