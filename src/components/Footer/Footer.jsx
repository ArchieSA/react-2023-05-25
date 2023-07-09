'use client';

import classNames from 'classnames';

import { Button } from '@/components/Button/Button';
import { useIsMobile, useMobileVersionSwitcher } from '@/contexts/device';
import styles from './styles.module.scss';

export const Footer = ({ className }) => {
  const isMobile = useIsMobile();
  const switchVersion = useMobileVersionSwitcher();

  return (
    <div className={classNames(styles.root, className)}>
      <Button onClick={switchVersion} viewVariant='inline'>
        {isMobile ? 'Десктопная версия' : 'Мобильная версия'}
      </Button>
    </div>
  );
};
