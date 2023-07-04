"use client";

/* eslint-disable react/jsx-key */
import { Tab } from "@/components/Tab/Tab";
import { useGetRestaurantsQuery } from "@/redux/services/api";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const RestaurantsTabContainer = ({ onClick }) => {
  const pathname = usePathname();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {restaurants.map((restaurant) => (
        <Link href={`${pathname}/${restaurant.id}`}>
          <Tab title={restaurant.name} />
        </Link>
      ))}
    </div>
  );
};
