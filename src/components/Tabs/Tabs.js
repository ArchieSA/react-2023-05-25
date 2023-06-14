import React from "react";

import styles from './styles.module.scss';
import { Tab } from "../Tab/Tab";
import classNames from "classnames";

const identity = (props) => props;

export const Tabs = ({
  className = '', 
  tabs, 
  reduce = identity, 
  onSwitchTab, 
  active 
}) => {
  return (
    <ul className={classNames(
      styles.tabs, 
      className
    )}>
      {
        tabs.map((tab, i) => (
          <Tab 
            key={i} 
            onChange={() => onSwitchTab(i)}
            active={active === i}
          >
            {reduce(tab)}
          </Tab>)
        )
      }
    </ul>
  )
}