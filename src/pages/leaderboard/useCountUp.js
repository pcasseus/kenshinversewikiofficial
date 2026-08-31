import { useEffect, useRef, useState } from "react";

export function useCountUp(value, duration = 1200) {
  const isFirstRender = useRef(true);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const startValue = isFirstRender.current ? 0 : display;
    const startTime = performance.now();

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 3);

      setDisplay(Math.floor(startValue + (value - startValue) * eased));

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        isFirstRender.current = false;
      }
    }

    requestAnimationFrame(tick);
  }, [value, duration]);

  return display;
}
