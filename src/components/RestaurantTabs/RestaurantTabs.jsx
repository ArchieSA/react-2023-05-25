import React from "react";
import Link from "next/link";
import cn from "classnames";
// import { usePathname } from "next/navigation";
import { Tab } from "@/components/Tab/Tab";
import styles from "./styles.module.scss";

export const RestaurantsTabs = ({ restaurants, className, pathname }) => {
  // только клиент
  // const pathname = usePathname();

  return (
    <div className={cn(className, styles.container)}>
      {restaurants.map(({ id, name }) => (
        <Link key={id} href={`${pathname}/${id}`}>
          <Tab title={name} />
        </Link>
      ))}
    </div>
  );
};
