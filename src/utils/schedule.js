export function debounce(
  fn,
  ms,
) {
  let waitingTimeout
  
  return (...args) => {
    if (waitingTimeout) {
      clearTimeout(waitingTimeout);
      waitingTimeout = undefined;
    }
  
    waitingTimeout = setTimeout(() => {
      fn(...args);
  
      waitingTimeout = undefined;
    }, ms);
  };
}