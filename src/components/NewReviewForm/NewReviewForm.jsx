/* eslint-disable react/jsx-key */
import { Rating } from "@/components/Rating/Rating";
import React, { useReducer, useState } from "react";
import { useDispatch } from "react-redux";

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

export const NewReviewForm = ({ users = [], saveReview }) => {
  const [form, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
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
            <option value={id}>{name}</option>
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
