/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import { StarIcon } from '../icons/StarIcon';
import styles from './styles.module.scss';

export const Rating = ({ value, onChange }) => {
  const [rating, setRating] = useState(new Array(5).fill(null));

  useEffect(() => {
    generateRating(value);
  }, [value]);

  const generateRating = currentRating => {
    const updatedArray = rating.map((_, index) => {
      return (
        <StarIcon fill={index < currentRating ? 'secondary' : 'primary'} />
      );
    });
    setRating(updatedArray);
  };
  return (
    <div className={styles.root}>
      {rating.map((star, index) => {
        return (
          <button
            className={styles.button}
            onClick={() => onChange(index + 1)}
            disabled={value === index + 1}
            key={index}
          >
            {star}
          </button>
        );
      })}
    </div>
  );
};
