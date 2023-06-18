'use client';
import { Button } from "@/components/Button/Button";
import styles from "./styles.module.scss";
import { useVerion, useVersionSwitcher } from "@/contexts/version";
import { APP_VIEW_VERSION } from "@/utils/constants";

export const Footer = () => {
  const version = useVerion()
  const switchVersion = useVersionSwitcher()

  return (
    <div className={styles.root}>
      <Button viewVariant="text" onClick={switchVersion}>
        {version === APP_VIEW_VERSION.desktop ? APP_VIEW_VERSION.mobile : APP_VIEW_VERSION.desktop}
      </Button>
    </div>
  )
}