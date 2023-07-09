'use client'

import React, { useReducer } from "react";
import { Rating } from "@/components/Rating/Rating";
import styles from "./styles.module.scss";

const initialState = {
  userId: "",
  text: "",
  rating: 5,
};

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

export const NewReviewForm = ({ users = [], review, saveReview, cancel }) => {
  const [form, dispatch] = useReducer(reducer, review || initialState);

  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          if (form.userId && form.text && form.rating) {
            saveReview(form);
            dispatch({ type: "reset" });
          }
        }}
      >
        SaveReview
      </button>&nbsp;
      <button
        onClick={() => {
          cancel()
        }}
      >
        Cancel
      </button>
      <div className={styles.row}>
        <label>Name&nbsp;</label>
        <select
          className={styles.control}
          value={form.userId}
          onChange={(event) => {
            dispatch({ type: "changeUser", payload: event.target.value });
          }}
          disabled={!!review}
        >
          <option>-</option>
          {users.map(({ name, id }) => (
            <option key={id} value={id}>{name}</option>
          ))}
        </select>
      </div>
      <div className={styles.row}>
        <label>Text&nbsp;</label>
        <input className={styles.control}
          value={form.text}
          onChange={(event) =>
            dispatch({ type: "changeText", payload: event.target.value })
          }
        />
      </div>
      <div className={styles.row}>
        <label>Rating&nbsp;</label>
        <Rating
          className={styles.control}
          value={form.rating}
          onChange={(value) =>
            dispatch({ type: "changeRating", payload: value })
          }
        />
      </div>
    </div>
  );
};
