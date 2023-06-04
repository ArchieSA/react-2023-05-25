/* eslint-disable react/jsx-key */
/* eslint-disable react/no-children-prop */
import React from "react";
import { restaurants } from "@/mocks";
import { Menu } from "@/components/Menu/Menu";
import { Reviews } from "@/components/Reviews";

export default function Home() {
  if(!restaurants?.length) {
    return <div>This page is empty, try again later</div>
  }
  return (
    <div style={{display: 'flex'}}>
      {restaurants.map(({id, name, menu, reviews}) => {
        return (
          <div style={{margin: '0px auto', padding: '0px 30px'}} key={id}>
            <h2>Restaurant - {name}</h2>
            <Menu menu={menu} />
            <Reviews reviews={reviews} />  
          </div>
        )
      })}
    </div>
  );
}
