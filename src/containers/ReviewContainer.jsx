import { Review } from '@/components/Review/Review';
import { selectReview } from '@/redux/features/review/selectors';
import { useSelector } from 'react-redux';

export const ReviewContainer = ({ reviewId, ...props }) => {
  const review = useSelector(state => selectReview(state, reviewId));
  if(!review){
    
  }
  return <Review review={review} {...props} />;
};
