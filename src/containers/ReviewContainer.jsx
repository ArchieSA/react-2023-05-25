import React from "react";

import { Review } from "@/components/Review/Review";
import { useSelector } from "react-redux";
import { selectReview } from "@/redux/features/review/selectors";
import { selectUser } from "@/redux/features/users/selectors";

export const ReviewContainer = ({ id, ...props }) => {

    const review = useSelector((state) => selectReview(state, id));
    const user = useSelector((state) => selectUser(state, review.userId));

    return <Review review={review} user={user} {...props} />;
};
