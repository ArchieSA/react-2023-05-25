export const Rating = ({ value, onChange }) => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((score, index) => {
        return (
          <button
            disabled={value === score}
            onClick={() => onChange(score)}
            key={index}
          >
            {score}
          </button>
        );
      })}
    </div>
  );
};
