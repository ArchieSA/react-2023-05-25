export const Comment = ({ comment }) => {
  if (!comment) {
    return null
  }

  const { user, text, rating } = comment
  return (
    <div>
      <p><b>Rating: </b>{ rating }</p>
      <p><b>User: </b>{ user }</p>
      <p><b>Comment: </b>{ text }</p>
    </div>
  )
}
