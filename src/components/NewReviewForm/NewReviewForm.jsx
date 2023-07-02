/* eslint-disable react/jsx-key */
import { Rating } from "@/components/Rating/Rating";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { Button } from "../Button/Button";
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
    case "initalUpdate": {
      return { userId: payload?.userId, text: payload?.text, rating: payload?.rating};
    }
    case "reset": {
      return initialState;
    }
    default:
      return state;
  }
};

export const NewReviewForm = ({ users, saveReview, updatReview, review }) => {
  const [form, dispatch] = useReducer(reducer, initialState);

  const refReview = useRef(review) //чтобы все работало в режиме изминения
  useEffect(() => {
    review && dispatch({type: "initalUpdate", payload: refReview.current})
  }, [refReview])

  return (
    <div className={styles.root}>
      <div>
        <label>Name</label>
        <select
          value={form.userId}
          onChange={(event) => {
            dispatch({ type: "changeUser", payload: event.target.value });
          }}
        >
          <option>-</option>
          {users?.map(({ name, id }) => (
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
      <div>
        <Button
          onClick={() => {
            if (form.userId && form.text && form.rating) {
              review ? updatReview(form) : saveReview(form); //выбор метода согласно ревью
              dispatch({ type: "reset" });
            }
          }}
        >
          SaveReview
        </Button>
      </div>
    </div>
  );
};
