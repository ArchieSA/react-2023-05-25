import { Rating } from '@/components/Rating/Rating';
import { useReducer } from 'react';

const initialState = {
  name: '',
  text: '',
  rating: 5,
};

let resetRevieForm;

// action = {type, payload}
const reducer = (state, { type, payload } = {}) => {
  switch (type) {
    case 'changeName': {
      return { ...initialState, name: payload };
    }
    case 'changeText': {
      return { ...state, text: payload };
    }
    case 'changeRating': {
      if (payload === '' || (Number(payload) <= 5 && Number(payload) >= 1)) {
        return { ...state, rating: payload };
      }
    }
    case 'resetForm': {
      return { ...initialState }
    }
    default:
      return state;
  }
};

const NewReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, initialState);

  resetRevieForm = () => dispatch({ type: 'resetForm' });

  return (
    <fieldset style={{ padding: '10px', width: '400px' }}>
      <legend><b>New review</b></legend>
      <div style={{ marginBottom: '10px' }}>
        <label>Name&nbsp;&nbsp;</label>
        <input
          value={form.name}
          onChange={(event) =>
            dispatch({ type: 'changeName', payload: event.target.value })
          }
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Text&nbsp;&nbsp;</label>
        <input
          value={form.text}
          onChange={(event) =>
            dispatch({ type: 'changeText', payload: event.target.value })
          }
        />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '5px' }}>Rating</label>
        <Rating
          value={form.rating}
          onChange={(value) =>
            dispatch({ type: 'changeRating', payload: value })
          }
        />
      </div>
    </fieldset>
  );
};

export default NewReviewForm;
export { resetRevieForm };
