'use client';
import React from "react";

import styles from "./styles.module.scss";
import { useVersion, useVersionSwitcher } from "@/contexts/version";
import { Button } from "@/components/Button/Button";

export const Footer = () => {
  const switchVersion = useVersionSwitcher();
  const version = useVersion();

  return (
    <footer className={styles.footer}>
      <Button
        onClick={switchVersion}
        viewVariant="inline"
      >
       {version === 'mobile' ? 'Декстопная версия' : 'Мобильная версия'} 
      </Button>
    </footer>

  );
};
