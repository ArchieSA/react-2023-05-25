"use client";

import React, { useCallback, useState } from "react";
import { Button } from "@/components/Button/Button";

import { useView, useViewSwitcher } from "@/contexts/view";

export const Footer = ({ className }) => {
  let version = useView();

  const switchView = useViewSwitcher();
  
  return (
    <>
      <footer className={className}>
        <Button onClick={switchView} viewVariant="link">
          {version == "mobile" ? "Desktop version" : "Mobile Version"}
        </Button>
      </footer>
    </>
  );
};
