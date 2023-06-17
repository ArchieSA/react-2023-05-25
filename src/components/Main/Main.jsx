import cn from 'classnames';
import styles from './styles.module.scss';

export const Main = ({ className, children }) => {
  return <main className={cn(styles.root, className)}>{children}</main>;
};
