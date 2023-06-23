import React from "react";
import cn from 'classnames'
import { Button } from "@/components/Button/Button";
import styles from './styles.module.scss'

export const Tab = ({ title, onClick, className, active }) => {
  return (
    <Button onClick={onClick} className={cn(className, {[styles.activeTab]: active})}>
      {title}
    </Button>
  );
};
