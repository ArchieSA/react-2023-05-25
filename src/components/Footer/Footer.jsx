'use client';
import { useVersion } from '@/contexts/version';
import cn from 'classnames';
import { Button } from '../Button/Button';
import styles from './styles.module.scss';

export const Footer = ({ classNames }) => {
  const { version, setVersion } = useVersion();

  const versionName = {
    desktop: 'Десктопная',
    mobile: 'Мобильная',
  };

  return (
    <footer className={cn(styles.root, classNames)}>
      <Button
        viewVariant={'switcher'}
        onClick={setVersion}
      >{`${versionName[version]} версия`}</Button>
    </footer>
  );
};
