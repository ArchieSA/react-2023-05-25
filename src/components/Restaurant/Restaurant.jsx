import { Menu } from '@/components/Menu/Menu'
import { Review } from '@/components/Review/Review'

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant

  return (
    <section>
      <h2>{ name }</h2>
      <Menu menu={menu} />
      <Review review={reviews} />
    </section>
  )
}
