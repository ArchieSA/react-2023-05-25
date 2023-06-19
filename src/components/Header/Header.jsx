"use client";

import React, { useContext } from "react";
import classNames from "classnames";
import Image from "next/image";

import styles from "./styles.module.scss";
import { Button } from "@/components/Button/Button";
import { useTheme, useThemeSwitcher } from "@/contexts/theme";

export const Header = ({ className }) => {
  const switchTheme = useThemeSwitcher();

  return (
    <header className={classNames(styles.root, className)}>
      <Image src="/images/logo.png" width={115} height={18} alt="" />
      <div className={styles.links}>
        <Button onClick={switchTheme}>SwitchTheme</Button>
      </div>
    </header>
  );
};
