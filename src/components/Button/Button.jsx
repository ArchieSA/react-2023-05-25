import { useTheme } from '@/contexts/theme';
import classNames from 'classnames';
import styles from './styles.module.scss';

const ViewVariantStyle = {
  primary: styles.primary,
  secondary: styles.secondary,
  switcher: styles.switcher,
};

const ThemeStyle = {
  default: styles.default,
  alternative: styles.alternative,
};

export const Button = ({
  children,
  onClick,
  disabled,
  className,
  viewVariant = 'primary',
}) => {
  const theme = useTheme();

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        styles.root,
        className,
        ViewVariantStyle[viewVariant],
        ThemeStyle[theme],
        {
          [styles.disabled]: disabled,
        }
      )}
    >
      {children}
    </button>
  );
};
