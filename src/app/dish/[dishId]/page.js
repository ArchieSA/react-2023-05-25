import { DishInfo } from '@/components/DishInfo/DishInfo'
import { fetchDish } from "@/services";
import { BackButton } from '@/components/BackButton/BackButton'
import styles from "./styles.module.scss";

export async function generateMetadata({ params }) {
  const dish = await fetchDish(params.dishId)

  return {
    title: `О блюде ${dish?.name}`,
  };
}

export default async function DishPage({params}) {
  const dish = await fetchDish(params.dishId)

  return <div className={styles.container}>
    <div className={styles.nameContainer}><BackButton /><h2 className={styles.name}>{dish.name}</h2></div>
    <DishInfo {...dish} className={styles.dishCard} />
  </div>

}
