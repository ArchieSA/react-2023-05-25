import { Rating } from '@/components/Rating/Rating';
import { useReducer } from 'react';
import styles from './styles.module.scss';

const initialState = {
  name: '',
  text: '',
  rating: 0,
};

// action = {type, payload}
const reducer = (state, { type, payload } = {}) => {
  switch (type) {
    case 'changeName': {
      return { ...initialState, name: payload };
    }
    case 'changeText': {
      return { ...state, text: payload };
    }
    case 'changeRating': {
      if (payload === '' || (Number(payload) <= 5 && Number(payload) >= 1)) {
        return { ...state, rating: payload };
      }
    }
    default:
      return state;
  }
};

export const NewReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, initialState);

  return (
    <form className={styles.root} onSubmit={event => event.preventDefault()}>
      <div className={styles.wrapper}>
        <div className={styles.topContainer}>
          <label className={styles.labelTop}>
            Name:
            <input
              type={'text'}
              value={form.name}
              onChange={event =>
                dispatch({ type: 'changeName', payload: event.target.value })
              }
            />
          </label>
          <label>
            Rating:
            <Rating
              value={form.rating}
              onChange={value =>
                dispatch({ type: 'changeRating', payload: value })
              }
            />
          </label>
        </div>
        <div className={styles.buttomContainer}>
          <label>
            Text:
            <textarea
              type={'text'}
              value={form.text}
              onChange={event =>
                dispatch({ type: 'changeText', payload: event.target.value })
              }
            />
          </label>
        </div>
      </div>
    </form>
  );
};
