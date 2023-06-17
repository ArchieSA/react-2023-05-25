import React, { useContext, useState } from "react";

import styles from "./styles.module.scss";
import { Button } from "@/components/Button/Button";
import { useDesctopSwitch } from "@/contexts/desktop";
import { ButtonText } from "@/components/ButtonText/ButtonText";

export const Footer = () => {
    const switchDesctop = useDesctopSwitch()
    // компонент ButtonText что-бы не рендерить весь футер (как пример работы)

    return (
        <footer className={styles.root}>
            <div className={styles.links}>
                <Button
                    onClick={switchDesctop}
                    viewVariant="additional"
                >
                    <ButtonText />
                </Button>
            </div>
        </footer>
    );
};
