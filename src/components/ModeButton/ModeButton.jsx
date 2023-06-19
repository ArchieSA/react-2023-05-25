"use client";

import React from "react";
import { Button } from "@/components/Button/Button";
import { useViewMode, useViewModeController, VIEW_MODES } from '@/contexts/viewMode'

const modeToString = (viewMode) => {
  switch (viewMode) {
    case VIEW_MODES.desktop:
      return "Десктопная версия"

    case VIEW_MODES.mobile:
      return "Мобильная версия"

    default:
        return "Неподдерживаемая версия"
  }
}

export const ModeButton = () => {
  const mode = useViewMode()
  const changeMode = useViewModeController()
  
  return (
    <Button onClick={changeMode} viewVariant='link'>{modeToString(mode)}</Button>
  );
};
