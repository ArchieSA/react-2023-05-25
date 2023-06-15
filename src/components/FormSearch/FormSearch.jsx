import styles from './styles.module.scss';
export const FormSearch = ({ onChange }) => {
  return (
    <form className={styles.root} onSubmit={event => event.preventDefault()}>
      <input className={styles.input} type={'search'} onChange={onChange} />
    </form>
  );
};
