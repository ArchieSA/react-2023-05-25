import React, { memo } from "react";
import cn from "classnames";
import Image from "next/image";
import styles from "./styles.module.scss";

const EMPTY_OBJECT = {};

const splashFactory = (props) => {
  const { isLoading, error, operationTitle, showTitle } = props;
  let shaded = false;
  let splash;

  if (isLoading) {
    splash = (
      <>
        <Image
          src="/images/spinner.png"
          width={24}
          height={24}
          alt={operationTitle}
          title={showTitle ? undefined : operationTitle}
        />
        {showTitle && <>&nbsp;&nbsp;{operationTitle}</>}
      </>
    );
    shaded = true;
  } else if (error) {
    splash = (
      <>
        <Image
          src="/images/exclamation.png"
          width={24}
          height={24}
          alt={`Ошибка загрузки: ${operationTitle}`}
          title={showTitle ? undefined : new String(error)}
        />
        {showTitle && <>&nbsp;&nbsp;{new String(error)}</>}
      </>
    );
  }

  return { splash, shaded };
};

export const Splash = memo(
  ({ children, getComponent = splashFactory, ...rest }) => {
    const { splash, shaded } = getComponent({ ...rest });

    return (
      <>
        {Boolean(splash) && (
          <div
            className={cn(styles.splashContainer, {
              [styles.shadedBg]: shaded,
            })}
          >
            {splash}
          </div>
        )}
        {children}
      </>
    );
  }
);

Splash.displayName = "Splash";
