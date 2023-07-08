import { Rating } from "@/components/Rating/Rating";
import { useReducer } from "react";

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

export const NewReviewForm = ({ users = [], review, saveReview }) => {
  const [form, dispatch] = useReducer(reducer, review || initialState);

  return (
    <div style={{marginTop: '20px', padding: '15px', border: '1px solid #eee'}}>
      <button
        onClick={() => {
          if (form.userId && form.text && form.rating) {
            saveReview(form);
            dispatch({ type: "reset" });
          }
        }}
      >
        SaveReview
      </button>
      <div>
        <label>Name</label>
        <select
          value={form.userId}
          onChange={(event) => {
            dispatch({ type: "changeUser", payload: event.target.value });
          }}
        >
          <option>-</option>
          {users.map(({ name, id }) => (
            <option key={id} value={id}>{name}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Text</label>
        <input
          value={form.text}
          onChange={(event) =>
            dispatch({ type: "changeText", payload: event.target.value })
          }
        />
      </div>
      <div>
        <label>Rating</label>
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
