import React from "react";
import { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";

export const SearchInput = ({ onChange, initialValue = '' }) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const onChangeValue = () => {
    onChange(inputValue);
  }

  const debouncedOnChange = useDebounce(onChangeValue, 1000);

  return (
    <input value={inputValue} onChange={(evt) => {
        debouncedOnChange();
        setInputValue(evt.target.value);
      }} 
    />
  )
}