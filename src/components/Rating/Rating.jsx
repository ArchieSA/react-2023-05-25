/* eslint-disable react/jsx-key */
import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const Rating = ({ value, onChange }) => {
  return (
    <div className={styles.root}>
      {new Array(5).fill(null).map((_, index) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classNames(
            styles['root-item'],
            {
              [styles['root-item-disabled']]: value === index + 1,
            }
          )}
          key={index}
          fill={index <= value - 1 ? 'blue' : 'lightblue'}
          width="32" height="32" viewBox="0 0 122.88 117.1"
          onClick={value !== index + 1 ? () => onChange(index + 1) : undefined}
        >
          <path d="M64.42,2,80.13,38.7,120,42.26a3.2,3.2,0,0,1,1.82,5.62h0L91.64,74.18l8.9,39A3.19,3.19,0,0,1,98.12,117a3.27,3.27,0,0,1-2.46-.46L61.41,96.1,27.07,116.64a3.18,3.18,0,0,1-4.38-1.09,3.14,3.14,0,0,1-.37-2.38h0l8.91-39L1.09,47.88a3.24,3.24,0,0,1-.32-4.52,3.32,3.32,0,0,1,2.29-1l39.72-3.56L58.49,2a3.24,3.24,0,0,1,5.93,0Z"/>
        </svg>
      ))}
    </div>
  );
};
