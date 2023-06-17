import cn from 'classnames';
import styles from './styles.module.scss';

export const Footer = ({ classNames }) => {
  return <footer className={cn(styles.root, classNames)}>Footer</footer>;
};
