export default function UserAvatar({ viewer }) {
  if (!viewer) return null;
  return (
    <div className="me" title={viewer.name || 'Signed in'}>
      <img src={viewer.avatarUrl} alt={viewer.name || 'Your profile'} />
    </div>
  );
}
