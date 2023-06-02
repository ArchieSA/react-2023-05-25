import { Dish } from "@/components/Dish/Dish";

/* eslint-disable react/jsx-key */
export const Menu = ({ menu }) => {
	if (!menu?.length) {
		return <span>Empty Menu</span>
	}

	return (
		<div>
			<h3>Menu</h3>
			<ul>
				{menu.map((dish) => (
					<li>
						<Dish dish={dish} />
					</li>
				))}
			</ul>
		</div>
	);
};
