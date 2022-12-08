import { useEffect } from 'react';
import { useState } from 'react';

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    const mediaListener = media.addEventListener('change', listener);
    return () => media.removeEventListener('change', mediaListener);
  }, [query, matches]);

  return matches;
}
