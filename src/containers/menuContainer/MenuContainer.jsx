import { Menu } from "@/components/Menu/Menu";
import { selectReviews } from "@/redux/features/review/selector";
import React from "react";
import { useSelector } from "react-redux";

export const MenuContainer = ({ dishIds, classname }) => {
  return <Menu dishIds={dishIds} className={classname} />;
};
