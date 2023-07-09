import React from "react";
import { fetchRestaurants } from "@/services";
import { RestaurantsTabs } from '@/components/RestaurantTabs/RestaurantTabs'
//import { constructServerUrl } from '@/helpers/nextHelpers'
import { BackButton } from '@/components/BackButton/BackButton'
import styles from "./styles.module.scss";

export const metadata = {
  title: "Все рестораны",
};

export default async function RestaurantsPage() {
  const restaurants = await fetchRestaurants();

  return <div className={styles.container}>
    <BackButton />
    <RestaurantsTabs restaurants={restaurants} pathname='restaurant' />
  </div>;
}
