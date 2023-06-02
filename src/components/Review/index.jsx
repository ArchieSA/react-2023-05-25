export const Review = ({ name, text, rating }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{text}</p>
      <span>{rating}</span>
    </div>
  );
};
