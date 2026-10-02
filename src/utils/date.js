const pad = (n) => String(n).padStart(2, '0');

export const keyOf = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

export const parseKey = (k) => {
  const [y, m, d] = k.split('-').map(Number);
  return new Date(y, m - 1, d);
};

export const uid = () => Math.random().toString(36).slice(2, 9);

export function getGreeting(name) {
  const h = new Date().getHours();
  const first = name ? ', ' + name.trim().split(/\s+/)[0] : '';
  return (h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening') + first + '.';
}
