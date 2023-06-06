import React from "react"
import { Restaurant } from "./components"
import { restaurants } from "@/mocks"

export default function Home() {
  if (!restaurants?.length) {
    return <div>Нет данных</div>
  }

  return restaurants.map(restourant => <Restaurant key={restourant.id} {...restourant} />)
}
