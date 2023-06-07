import {Menu} from "@/components/Menu/Menu";
import {Review} from "@/components/Review/Review";
import React from "react";

export const Restaurant = ({restaurant}) => {
    if (!restaurant) {
        return null;
    }

    const {name, menu, reviews} = restaurant
    return (
        <div>
            <h2>Restaurant: {name}</h2>
            <Menu menu={menu}/>
            <Review reviews={reviews}/>
        </div>
    )
}