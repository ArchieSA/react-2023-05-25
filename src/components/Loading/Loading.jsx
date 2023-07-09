import styles from "./styles.module.scss";

export function Loading({name}) {
  return <div className={styles.loading}>Loading {name}...</div>;
}
