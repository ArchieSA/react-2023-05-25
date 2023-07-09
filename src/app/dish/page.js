import { DishList } from '@/components/DishList/DishList'
import { fetchDishes } from "@/services";
import { BackButton } from '@/components/BackButton/BackButton'
import styles from "./styles.module.scss";

export default async function DishListPage() {
  const dishes = await fetchDishes()

  return <div className={styles.container}>
    <BackButton />
    <DishList dishes={dishes} baseUrl='/dish' />
  </div>

}
