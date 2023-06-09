import { memo, useEffect, useState } from 'react'

export const Search = memo(function Search({ text = '', placeholder = '', delay = 2000, onChange }) {
  const [ value, setValue ] = useState('');
  const [ timerId, setTimerId ] = useState();

  useEffect(
    () => setValue(text),
    [text],
  );

  useEffect(
    () => {
      clearTimeout(timerId)
      const tId = setTimeout(() => onChange && onChange(value), delay)
      setTimerId(tId)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value],
  );

  return (
    <p>
      <input
        style={{ width: '320px' }}
        placeholder={placeholder}
        value={value}
        onInput={ev => setValue(ev.target.value)}
      />
    </p>
  );
});
