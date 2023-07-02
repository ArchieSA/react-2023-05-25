/* eslint-disable react/jsx-key */
import React, { useReducer, useState } from "react";
import classNames from "classnames";

import { useGetUsersQuery, useUpdateReviewMutation } from "@/redux/services/api";

import { Rating } from "@/components/Rating/Rating";
import { UserContainer } from "@/containers/UserContainer";
import { Button } from "../Button/Button";
import styles from "./styles.module.scss";


export const Review = ({ review, className }) => {
  const [updateReview, { isLoading, error }] = useUpdateReviewMutation();
  const { data: users, isLoading: isUsersLoading } = useGetUsersQuery();
  const [changeMode, setChangeMode] = useState(false);

  const { text, userId, rating } = review;

  const initialState = {
    userId,
    text,
    rating,
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

  const [form, dispatch] = useReducer(reducer, initialState);

  if (!review) {
    return null;
  }

  const saveReview = (newReview) => {
    const reviewId = review.id;
    updateReview({ reviewId, newReview })
  }

  if (isLoading || isUsersLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      { !changeMode ? (
          <Button onClick={() => setChangeMode(true)}>Редактировать</Button>
        )
        : (
          <div>
            <button
              onClick={() => {
                if (form.userId && form.text && form.rating) {
                  saveReview(form);
                  setChangeMode(false);
                }
              }}
            >
              SaveReview
            </button>
          </div>
        )
      }
      

    <div className={classNames(styles.root, className)}>
      <div className={styles.header}>
        {!changeMode ? <UserContainer userId={userId} />
        : (
          <div>
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
        )}
        {!changeMode ? <div>{rating}</div>
        : (
          <Rating
            value={form.rating}
            onChange={(value) =>
              dispatch({ type: "changeRating", payload: value })
            }
          />
        )}
      </div>
      {!changeMode ? <p>{text}</p>
              : (<input
              value={form.text}
              onChange={(event) =>
                dispatch({ type: "changeText", payload: event.target.value })
              }
            />)
      }
    </div>
  </div>
  );
};
