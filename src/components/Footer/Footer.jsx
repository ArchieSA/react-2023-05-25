'use client'
import React from "react";

import styles from './styles.module.scss';
import classNames from "classnames";
import { Button } from "../Button/Button";
import { useToggleVersion, useVersion } from "@/contexts/version";

export const Footer = ({ className }) => {
  const { isMobile } = useVersion();
  const toggleVersion = useToggleVersion();

  return (
    <footer className={classNames(styles.footer, className)}>
      <Button 
        viewVariant="link"
        onClick={toggleVersion}
      >
        {isMobile ? "десктопная версия" : "мобильная версия"}
      </Button>
    </footer>
  ) 
}