/* eslint-disable react/jsx-key */
import { Menu } from '@/components/Menu/Menu';
import { NewReviewForm } from '@/components/NewReviewForm/NewReviewForm';
import { Reviews } from '@/components/Reviews/Reviews';
import React from 'react';
import { Htag } from '../Htag/Htag';
import styles from './styles.module.scss';

export const Restaurant = ({ restaurant }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  if (!restaurant) {
    return null;
  }

  const { name, menu, reviews } = restaurant;

  return (
    <div className={styles.root}>
      <Htag tag={'h2'} value={name} />
      <div className={styles.wrapper}>
        <Menu menu={menu} />
        <div>
          <Reviews reviews={reviews} />
          <button onClick={() => setIsOpen(!isOpen)}>Оставить отзыв</button>
          {isOpen && <NewReviewForm />}
        </div>
      </div>
    </div>
  );
};
