import { Rating } from "@/components/Rating/Rating";
import { useReducer } from "react";
import styles from "./styles.module.scss";

const initialState = {
  userId: "",
  text: "",
  rating: 5,
};

// action = {type, payload}
const reducer = (state, { type, payload } = {}) => {
  switch (type) {
    case "changeUser": {
      return { ...initialState, userId: payload };
    }
    case "changeText": {
      return { ...state, text: payload };
    }
    case "changeRating": {
      if (payload === "" || (Number(payload) <= 5 && Number(payload) >= 1)) {
        return { ...state, rating: payload };
      }
    }
    case "reset": {
      return initialState;
    }
    default:
      return state;
  }
};

export const ReviewForm = ({ users = [], review, saveReview }) => {
  const [form, dispatch] = useReducer(reducer, review || initialState);

  return (
    <div className={styles.root}>
      <h4 className={styles.title}>{review ? 'Edit review' : 'Create review'}</h4>
      <div className={styles.field}>
        <label className={styles.fieldLabel}>Name</label>
        <select
          value={form.userId}
          onChange={(event) => {
            dispatch({ type: "changeUser", payload: event.target.value });
          }}
          disabled={review?.id}
        >
          <option>-</option>
          {users.map(({ name, id }) => (
            <option key={id} value={id}>{name}</option>
          ))}
        </select>
      </div>
      <div className={styles.field}>
        <label className={styles.fieldLabel}>Text</label>
        <textarea
          className={styles.fieldValue}
          rows="3"
          value={form.text}
          onChange={(event) =>
            dispatch({ type: "changeText", payload: event.target.value })
          }
        />
      </div>
      <div className={styles.field}>
        <label className={styles.fieldLabel}>Rating</label>
        <Rating
          value={form.rating}
          onChange={(value) =>
            dispatch({ type: "changeRating", payload: value })
          }
        />
      </div>

      <button
        className={styles.saveButton}
        onClick={() => {
          if (form.userId && form.text && form.rating) {
            saveReview(form);
            dispatch({ type: "reset" });
          }
        }}
        disabled={!(form.userId && form.text && form.rating)}
      >
        {review ? 'Update review' : 'Save review'}
      </button>
    </div>
  );
};
