import classNames from "classnames";
import React from "react";

import styles from "./styles.module.scss";

export const Skeleton = ({ className }) => {
  return <div className={classNames(styles.root, className)} />;
};
