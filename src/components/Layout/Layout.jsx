import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import styles from "./styles.module.scss";

export const Layout = ({ children }) => {
  return (
    <div className={styles.root}>
      <Header className={styles.header} />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
};
