import { Rating } from "@/components/Rating/Rating";
import React, { useReducer } from "react";

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
    <div>
      <Rating
        value={form}
        onChange={(type, value) => dispatch({ type: type, payload: value })}
      />
    </div>
  );
};
