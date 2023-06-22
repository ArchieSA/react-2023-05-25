import { Menu } from "@/components/Menu/Menu";
import React from "react";

export const MenuContainer = ({ dishIds, ...props}) => {
  if (!dishIds?.length) {
    return <span>Empty Menu</span>;
  }

  return (
    <Menu 
      {...props} 
      dishIds={dishIds} 
    />
  )
}