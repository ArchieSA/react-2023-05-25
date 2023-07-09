import React from "react";
import Link from "next/link";
//import { constructServerUrl } from '@/helpers/nextHelpers'
import styles from "./styles.module.scss";

export default function Home() {
  return <div className={styles.container}>
    <Link href='restaurant'>Restaurants</Link>
    <Link href='dish'>All dishes</Link>
  </div>;
}
