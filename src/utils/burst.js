// Small pastel confetti burst from an element
const COLOURS = ['--do-d', '--plan-d', '--delegate-d', '--drop-d'];

export default function burst(el) {
  if (matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  const r = el.getBoundingClientRect();
  const styles = getComputedStyle(document.documentElement);
  for (let n = 0; n < 14; n++) {
    const p = document.createElement('i');
    p.className = 'pop';
    p.style.left = r.left + r.width / 2 + 'px';
    p.style.top = r.top + r.height / 2 + 'px';
    p.style.background = styles.getPropertyValue(COLOURS[n % 4]);
    document.body.appendChild(p);
    const a = Math.random() * 6.28;
    const d = 30 + Math.random() * 40;
    p.animate(
      [
        { transform: 'translate(0,0) scale(1)', opacity: 1 },
        { transform: `translate(${Math.cos(a) * d}px,${Math.sin(a) * d + 14}px) scale(.2)`, opacity: 0 },
      ],
      { duration: 650, easing: 'cubic-bezier(.2,.8,.3,1)' }
    ).onfinish = () => p.remove();
  }
}
