export const QUADRANTS = [
  { id: 'do', name: 'Do first', sub: 'Urgent and important' },
  { id: 'plan', name: 'Schedule', sub: 'Important, not urgent' },
  { id: 'delegate', name: 'Delegate', sub: 'Urgent, not important' },
  { id: 'drop', name: 'Let go', sub: 'Neither. Be brave.' },
];

// Matrix rows: label on the left, quadrant ids left-to-right
export const MATRIX_ROWS = [
  { label: 'Important', ids: ['do', 'plan'] },
  { label: 'Not important', ids: ['delegate', 'drop'] },
];
