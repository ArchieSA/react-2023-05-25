import { Comment } from '@/components/Comment/Comment'

export const Review = ({ review }) => {
  if (!review?.length) {
    return <span>Empty Review</span>
  }

  return (
    <div>
      <h3>Review</h3>
      <ul>
        {review.map(comment => (
          <li key={comment.id}>
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    </div>
  )
}
