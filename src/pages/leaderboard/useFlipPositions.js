import { useLayoutEffect, useRef } from "react";

export function useFlipPositions(items) {
  const prevPositions = useRef(new Map());

  useLayoutEffect(() => {
    items.forEach((item) => {
      const el = document.getElementById(`row-${item.slug}`);
      if (!el) return;

      prevPositions.current.set(item.slug, el.getBoundingClientRect());
    });
  }, [items.map((i) => i.slug).join("|")]); 

  useLayoutEffect(() => {
    items.forEach((item) => {
      const el = document.getElementById(`row-${item.slug}`);
      const prev = prevPositions.current.get(item.slug);
      if (!el || !prev) return;

      const next = el.getBoundingClientRect();
      const dy = prev.top - next.top;

      if (dy !== 0) {
        el.style.transform = `translateY(${dy}px)`;
        el.style.transition = "none";

        requestAnimationFrame(() => {
          el.style.transition =
            "transform 500ms cubic-bezier(0.22, 0.61, 0.36, 1)";
          el.style.transform = "translateY(0)";
        });
      }
    });
  }, [items]);
}
