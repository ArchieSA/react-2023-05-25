import { Rating } from "@/components/Rating/Rating";
import React, { useReducer, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

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

export const NewReviewForm = ({position}) => {
  const [form, dispatch] = useReducer(reducer, initialState);

  return (
    // внешний отступ передал через проп, чем-то похоже на БЭМ где сам элемент незнает про соседей
    <div className={classNames(styles.root, position)}>
      <div className={styles.label}>
        <label>Name</label>
        <input
          value={form.name}
          onChange={(event) =>
            dispatch({ type: "changeName", payload: event.target.value })
          }
        />
      </div>
      <div className={styles.label}>
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
