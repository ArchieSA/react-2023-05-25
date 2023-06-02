export const Dish = ({ dish }) => {
	if (!dish) {
		return null
	}

	const { name, price } = dish;
	return (
		<div>
			<p>Dish: {name}</p>
			<p>Prise: {price}</p>
		</div>
	);
};
