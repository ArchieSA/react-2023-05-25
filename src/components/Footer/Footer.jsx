"use client";

import classNames from "classnames";
import React from "react";

import styles from "./styles.module.scss";
import { Button } from "@/components/Button/Button";
import { useIsMobile, useMobileVersionSwitcher } from "@/contexts/device";

export const Footer = ({ className }) => {
  const isMobile = useIsMobile();
  const switchVersion = useMobileVersionSwitcher();

  return (
    <div className={classNames(className, styles.root)}>
      <Button onClick={switchVersion} viewVariant="inline">
        {isMobile ? "Десктопная версия" : "Мобильная версия"}
      </Button>
    </div>
  );
};
