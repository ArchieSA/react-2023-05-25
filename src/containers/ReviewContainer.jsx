import { Review } from "@/components/Review/Review";
import { selectReview } from "@/redux/features/review/selectors";
import { selectUserById, selectUserNameById } from "@/redux/features/user/selector";
import React from "react";
import { useSelector } from "react-redux";

export const ReviewContainer = ({ reviewId, ...props }) => {
  const review = useSelector((state) => selectReview(state, reviewId));
  
  const {userId, rating, text} = review;
  const user = useSelector((state)=> selectUserById(state, userId));

  return <Review user={user.name} rating={rating} text={text} {...props} />;
};
