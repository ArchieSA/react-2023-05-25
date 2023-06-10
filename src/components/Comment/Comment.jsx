export const Comment = ({ comment }) => {
    if (!comment) {
        return null
    }

    const { user, text, rating } = comment;
    
    return (
            <div>
                <p>User: {user}</p>
                <p>Comments: {text}</p>
                <p>Rating: {rating}</p>
            </div>
    );
};
