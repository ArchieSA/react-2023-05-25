import { Button } from "@/components/Button/Button";
import React from "react";

export const Tab = ({ title, onClick, className }) => {
  return (
    <Button onClick={onClick} className={className}>
      {title}
    </Button>
  );
};
