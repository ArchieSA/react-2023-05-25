import { Rating } from "@/components/Rating/Rating";
import { useReducer } from "react";
import styles from "./styles.module.scss";

const initialState = {
  name: "",
  text: "",
  rating: 5,
};

// action = {type, payload}
const reducer = (state, { type, payload } = {}) => {
  switch (type) {
    case "changeName": {
      return { ...initialState, name: payload };
    }
    case "changeText": {
      return { ...state, text: payload };
    }
    case "changeRating": {
      if (payload === "" || (Number(payload) <= 5 && Number(payload) >= 1)) {
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
    <div className={styles.root}>
      <h3 className={styles['root-title']}>New review</h3>
      <div className={styles['root-row']}>
        <label className={styles['root-label']}>Name</label>
        <input
          value={form.name}
          onChange={(event) =>
            dispatch({ type: "changeName", payload: event.target.value })
          }
        />
      </div>
      <div className={styles['root-row']}>
        <label className={styles['root-label']}>Text</label>
        <input
          value={form.text}
          onChange={(event) =>
            dispatch({ type: "changeText", payload: event.target.value })
          }
        />
      </div>
      <div className={styles['root-row']}>
        <label className={styles['root-label']}>Rating</label>
        <Rating
          value={form.rating}
          onChange={(value) =>
            dispatch({ type: "changeRating", payload: value })
          }
        />
      </div>
    </div>
  );
};
