'use client';

import classNames from 'classnames';
import Image from 'next/image';

import { Button } from '@/components/Button/Button';
import { useThemeSwitcher } from '@/contexts/theme';
import Link from 'next/link';
import styles from './styles.module.scss';

export const Header = ({ className }) => {
  const switchTheme = useThemeSwitcher();

  return (
    <header className={classNames(styles.root, className)}>
      <Link href='/'>
        <Image src='/images/logo.png' width={115} height={18} alt='' />
      </Link>
      <div className={styles.links}>
        <Button onClick={switchTheme}>SwitchTheme</Button>
      </div>
    </header>
  );
};
