export const Comment = ({comment}) => {
    if (!comment) {
        return null;
    }

    const {user, text, rating} = comment;
    return (
        <div>
            <p>Author: {user}</p>
            <p>Comment: {text}</p>
            <p>Rating: {rating}</p>
        </div>
    )
}