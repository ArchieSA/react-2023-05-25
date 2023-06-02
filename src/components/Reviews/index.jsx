import { Review } from '../Review';

export const Reviews = ({ reviews }) => {
  if (!reviews?.length) {
    return <span>Loading...</span>;
  }
  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map(review => {
          return (
            <li key={review.id}>
              <Review
                name={review.user}
                text={review.text}
                rating={review.rating}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
