import { useVersion } from "@/contexts/version";
import React from "react";

export const SearchInput = ({ onInput, className, placeholder = 'Введите название ресторана' }) => {
  const { isMobile } = useVersion();
  
  return !isMobile && (
    <input
      onChange={(event) => onInput(event.target.value)}
      className={className}
      placeholder={placeholder}
    />
  )
}