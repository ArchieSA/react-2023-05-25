export const Comments = ({ comments }) => {
    if (!comments) {
        return null
    }

    const { user, text, rating } = comments;
    return (
        <li>
            <div>
                <p>User: {user}</p>
                <p>Comments: {text}</p>
                <p>Rating: {rating}</p>
            </div>
        </li>
    );
};
