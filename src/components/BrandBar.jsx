import Logo from './Logo.jsx';
import UserAvatar from './UserAvatar.jsx';

export default function BrandBar({ viewer, onHome }) {
  return (
    <div className="brandrow">
      <a
        className="brand"
        href="#"
        aria-label="tidymind, back to today"
        onClick={(e) => { e.preventDefault(); onHome(); }}
      >
        <Logo />
        <span>tidymind</span>
      </a>
      <UserAvatar viewer={viewer} />
    </div>
  );
}
