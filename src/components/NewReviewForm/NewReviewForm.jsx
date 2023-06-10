import { Rating } from '@/components/Rating/Rating';
import React, { useReducer, useState } from 'react';

const initialState = {
  click1: 1,
  click2: 2,
  click3: 3,
  click4: 4,
  click5: 5,
  rating: 5,
};

// action = {type, payload}
const reducer = (state, { type, payload } = {}) => {
  switch (type) {
    case 'click1': {
      if (payload !== state.click1) {
        return { ...state, rating: payload };
      }
    }
    case 'click2': {
      if (payload !== state.click2) {
        return { ...state, rating: payload };
      }
    }
    case 'click3': {
      if (payload !== state.click3) {
        return { ...state, rating: payload };
      }
    }
    case 'click4': {
      if (payload !== state.click4) {
        return { ...state, rating: payload };
      }
    }
    case 'click5': {
      if (payload !== state.click5) {
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
      <h3>Rating</h3>
      <div style={{ display: 'flex' }}>
        <button
          onClick={() => dispatch({ type: 'click1', payload: form.click1 })}
        >
          {form.click1}
        </button>

        <button
          onClick={() => dispatch({ type: 'click2', payload: form.click2 })}
        >
          {form.click2}
        </button>

        <button
          onClick={() => dispatch({ type: 'click3', payload: form.click3 })}
        >
          {form.click3}
        </button>

        <button
          onClick={() => dispatch({ type: 'click4', payload: form.click4 })}
        >
          {form.click4}
        </button>

        <button
          onClick={() => dispatch({ type: 'click5', payload: form.click5 })}
        >
          {form.click5}
        </button>
      </div>

      <Rating value={form.rating} />
    </div>
  );
};
