export const Dish = ({ dish }) => {
  if (!dish) {
    return null
  }

  const { name, price, ingredients } = dish
  return (
    <div>
      <p><b>Name: </b>{ name }</p>
      <p><b>Price: </b>{ price }</p>
      <p><b>Ingredients: </b>{ ingredients.join(', ') }</p>
    </div>
  )
}
