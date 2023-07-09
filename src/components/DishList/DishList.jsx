import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

const DishItem = ({ name }) => <li>{name}</li>;

export const DishList = ({ baseUrl, dishes = [] }) => (
  <ul className={styles.list}>
    {dishes.map((dish) => (
      <Link key={dish.id} href={`${baseUrl}/${dish.id}`}>
        <DishItem {...dish} />
      </Link>
    ))}
  </ul>
);
