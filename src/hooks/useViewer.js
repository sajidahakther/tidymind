import { useState, useEffect } from 'react';

// Signed-in user from claude.ai. Outside claude.ai there is no viewer, so nothing is shown.
export default function useViewer() {
  const [viewer, setViewer] = useState(null);
  useEffect(() => {
    let off = false;
    (async () => {
      try {
        const u = window.claude && (await window.claude.use('user'));
        if (u && !off) setViewer(await u.me());
      } catch (e) {}
    })();
    return () => { off = true; };
  }, []);
  return viewer;
}
