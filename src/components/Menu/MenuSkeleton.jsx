import React from "react";
import { Skeleton } from "@/components/Skeleton/Skeleton";
import styles from "./styles.module.scss";

export const MenuSkeleton = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.title}>
        <Skeleton />
      </div>
      <div className={styles.element}>
        <Skeleton />
      </div>
    </div>
  );
};
