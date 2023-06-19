import React from "react";
import { useVersion } from "@/contexts/version";

export const DishSum = ({ amount = 0, price = 0, className }) => {
  const {isMobile} = useVersion();

  if(isMobile || amount > 0) {
    return null;
  };

  return (
    <span className={className}>{amount * price}р</span>
  )
}