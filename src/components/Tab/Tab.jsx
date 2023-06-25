import React from "react";
import cn from 'classnames'
import { Button } from "@/components/Button/Button";


export const Tab = ({ title, onClick, className, active }) => {
  return (
    <Button onClick={onClick} className={cn(className, {['active']: active})}>
      {title}
    </Button>
  );
};
