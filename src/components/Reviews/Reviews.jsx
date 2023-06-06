import { Comments } from "@/components/Comments/Comments"

export const Reviews = ({ reviews }) => {
    if (!reviews) {
        return <span>Empty reviews</span>
    }

    return (
        <>
            <h3>Reviews</h3>
            <ul>
                {reviews.map((comments) => (
                    <li>
                        <Comments comments={comments} />
                    </li>
                ))}
            </ul>
        </>
    )
}