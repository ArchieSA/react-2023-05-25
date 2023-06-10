/* eslint-disable react/jsx-key */
/* eslint-disable react/no-children-prop */
import React from "react";
import { restaurants } from "@/mocks";
import { Restaurants } from "@/components/Restaurants/Restaurants";

export default function Home() {

	return (
		<div>
			{restaurants.map((restaurant) => {
				return (
					<Restaurants restaurant={restaurant} />
				)
			})}
		</div>
	);
}
