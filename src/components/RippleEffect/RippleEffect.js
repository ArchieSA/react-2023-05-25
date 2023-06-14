import React, { useState, useCallback, useMemo } from "react";
import styles from './styles.module.scss';

function debounce(fn, ms) {
  let waitning;

  return (...agrs) => {
    if(waitning) {
      return;
    }

    waitning = setTimeout(() => {
      fn(...agrs);
      waitning = undefined;
    }, ms)
  }
}

export const RippleEffect = () => {
  const [ripples, setRipples] = useState([]);

  const cleanup = useMemo(() => {
    return debounce(() => {
      setRipples([]);
    }, 500, false);
  }, []);

  const onClick = useCallback((evt) => {
    const container = evt.currentTarget;
    const position = container.getBoundingClientRect();

    const rippleSize = container.offsetWidth / 2;

    setRipples([
      ...ripples,
      {
        x: evt.clientX - position.x - (rippleSize / 2),
        y: evt.clientY - position.y - (rippleSize / 2),
        size: rippleSize,
      },
    ]);

    requestAnimationFrame(() => {
      cleanup()
    })
  }, [ripples, cleanup])

  return  (
    <div className={styles.ripple} onMouseDown={onClick}>
      {
        ripples.map(({ x, y, size }, i) => (
          <span
            style={{
              left: `${x}px`,
              top: `${y}px`,
              width: `${size}px`,
              height: `${size}px`,
            }}
            key={i}
          />
      ))
      }
    </div>
  )
}