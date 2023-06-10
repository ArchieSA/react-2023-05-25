import { Comment } from "@/components/Comment/Comment"

export const Reviews = ({ reviews }) => {
    if (!reviews) {
        return <span>Empty reviews</span>
    }

    return (
        <>
            <h3>Reviews</h3>
            <ul>
                {reviews.map((comment) => (
                    <li>
                        <Comment comment={comment} />
                    </li>
                ))}
            </ul>
        </>
    )
}