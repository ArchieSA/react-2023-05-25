import React from 'react';

import styles from './styles.module.scss';
import classNames from 'classnames';
import { DishContainer } from '@/containers/DishContainer';

/* eslint-disable react/jsx-key */
export const Menu = ({ menuIds, className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h3>Menu</h3>
      <div className={styles.dishList}>
        {menuIds.map((dishId) => (
          <DishContainer dishId={dishId} className={styles.dish} />
        ))}
      </div>
    </div>
  );
};
