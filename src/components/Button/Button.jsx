import React from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";

const ViewVariantStyle = {
  primary: styles.primary,
  secondary: styles.secondary,
};

export const Button = ({
  children,
  onClick,
  disabled,
  className,
  viewVariant = "primary",
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
