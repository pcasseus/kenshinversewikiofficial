import { useLayoutEffect, useRef } from "react";

export function useFlipPositions(items) {
  const previousRects = useRef(new Map());
  const previousOrder = useRef([]);

  useLayoutEffect(() => {
    const currentOrder = items.map((item) => item.slug);

    const orderChanged =
      previousOrder.current.length > 0 &&
      previousOrder.current.join("|") !== currentOrder.join("|");

    if (orderChanged) {
      items.forEach((item) => {
        const element = document.getElementById(`row-${item.slug}`);
        const previousRect = previousRects.current.get(item.slug);

        if (!element || !previousRect) {
          return;
        }

        const nextRect = element.getBoundingClientRect();
        const deltaY = previousRect.top - nextRect.top;

        if (Math.abs(deltaY) < 1) {
          return;
        }

        element.style.transition = "none";
        element.style.transform = `translateY(${deltaY}px)`;
        element.style.zIndex = "3";

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            element.style.transition =
              "transform 560ms cubic-bezier(0.22, 0.61, 0.36, 1)";
            element.style.transform = "translateY(0)";

            const cleanup = () => {
              element.style.transition = "";
              element.style.transform = "";
              element.style.zIndex = "";
              element.removeEventListener("transitionend", cleanup);
            };

            element.addEventListener("transitionend", cleanup);
          });
        });
      });
    }

    const nextRects = new Map();

    items.forEach((item) => {
      const element = document.getElementById(`row-${item.slug}`);

      if (!element) {
        return;
      }

      nextRects.set(item.slug, element.getBoundingClientRect());
    });

    previousRects.current = nextRects;
    previousOrder.current = currentOrder;
  }, [items]);
}