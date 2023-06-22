import { Header } from "@/components/Header/Header";
import styles from "./styles.module.scss";
import { Footer } from "@/components/Footer/Footer";

export const Layout = ({ children }) => {
  return (
    <div className={styles.root}>
      <Header className={styles.header} />
      <div className={styles.content}>{children}</div>
      <Footer className={styles.footer} />
    </div>
  );
};
