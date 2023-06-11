export const SearchForm = ({ value, labelText, handler }) => {
  return (
    <form aria-label='search' onSubmit={evt => evt.preventDefault()}>
      <label>
        {labelText}
        <input type={'text'} value={value} onChange={handler} />
      </label>
    </form>
  );
};
