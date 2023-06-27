import styles from "./styles.module.scss";

export const Loader = ({ status, prefix }) => {
  if (!status) {
    return null
  }

  return (
    <div className={styles.root}>
      {prefix} fetch status is<b>{status}</b>
    </div>
  )
};
