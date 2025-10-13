import { useEffect, useRef, useState } from "react";

// Simple hook returning a ref and whether the element has been revealed
export default function useReveal(options = { threshold: 0.15 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      });
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref.current]);

  return [ref, visible];
}
