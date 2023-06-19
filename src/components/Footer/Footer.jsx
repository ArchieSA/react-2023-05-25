"use client";

import React from "react";
import classNames from "classnames";
import Image from "next/image";

import styles from "./styles.module.scss";
import { Button } from "@/components/Button/Button";
import { useVersion, useVersionSwitcher } from "@/contexts/version";


export const Footer = ({ className }) => {
  const switchVersion = useVersionSwitcher();
  const version = useVersion();

  return (
    <footer className={classNames(styles.root, className)}>
      <Image src="/images/logo.png" width={115} height={18} alt="" />
      <div className={styles.links}>
        <Button onClick={switchVersion}>{version === 'desktop' ? 'Мобильная версия' : 'Декстопная версия'} </Button>
      </div>
    </footer>
  );
};
