import classNames from 'classnames';
import styles from './styles.module.scss';

const ViewVariantStyle = {
  primary: styles.primary,
  secondary: styles.secondary,
  tab: styles.tab,
};

export const Button = ({
  children,
  onClick,
  disabled,
  className,
  viewVariant = 'primary',
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        styles.root,
        className,
        ViewVariantStyle[viewVariant],
        {
          [styles.disabled]: disabled,
        }
      )}
    >
      {children}
    </button>
  );
};
