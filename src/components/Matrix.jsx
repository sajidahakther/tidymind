import Quadrant from './Quadrant.jsx';
import { QUADRANTS, MATRIX_ROWS } from '../data/quadrants.js';

export default function Matrix({ items, ...rest }) {
  return (
    <div className="grid">
      <span />
      <div className="ax">Urgent</div>
      <div className="ax">Not urgent</div>
      {MATRIX_ROWS.map((row) => (
        <Row key={row.label} row={row} items={items} {...rest} />
      ))}
    </div>
  );
}

function Row({ row, items, ...rest }) {
  return (
    <>
      <div className="ax v">{row.label}</div>
      {row.ids.map((id) => (
        <Quadrant key={id} quadrant={QUADRANTS.find((q) => q.id === id)} items={items.filter((x) => x.q === id)} {...rest} />
      ))}
    </>
  );
}
