import React from "react";
import { RippleEffect } from "../RippleEffect/RippleEffect";

import styles from './styles.module.scss';
import classNames from "classnames";

export const Tab = ({ children, onChange, active, className }) => {
  
  return (
    <li 
      className={
        classNames(styles.tab, className, {
        [styles.active]: active,
      })} 
      onClick={onChange}
    >
      {children}

      <RippleEffect />
    </li>
  )
}