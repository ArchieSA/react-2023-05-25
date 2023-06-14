import React from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";

const ViewVariantStyle = {
  circle: styles['button-circle']
};

export const Button = ({
  children,
  onClick,
  disabled,
  className,
  shape,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        styles.root,
        className,
        {
          [ViewVariantStyle[shape]]: ViewVariantStyle[shape],
          [styles.root-disabled]: disabled,
        },
      )}
    >
      <span>{children}</span>
    </button>
  );
};
