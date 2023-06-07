import {Comment} from "@/components/Comment/Comment";

/* eslint-disable react/jsx-key */
export const Review = ({reviews}) => {
    if (!reviews?.length) {
        return <></>
    }

    return (
        <div>
            <h3>Reviews</h3>
            <ul>
                {reviews.map((comment) => (
                    <li>
                        <Comment comment={comment}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}