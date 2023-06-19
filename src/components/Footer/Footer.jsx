"use client";

import React from "react";
import classNames from "classnames";

import { ModeButton } from "@/components/ModeButton/ModeButton";
import { useTheme } from "@/contexts/theme";

import styles from "./styles.module.scss";


export const Footer = ({ className }) => {
  const buttons = [
    <ModeButton key='switch-mode' />,
  ]

  return (
    <footer className={classNames(styles.root, className)}>
      {buttons}
    </footer>
  );
};
