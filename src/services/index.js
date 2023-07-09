const BASE_API = "http://localhost:3001/api/";

export async function fetchRestaurants() {
  const url = new URL("restaurants", BASE_API);

  const response = await fetch(url.toString(), {
    next: { tags: ["config"] },
  });

  return await response.json();
}

export async function fetchRestaurant(restaurantId) {
  const url = new URL(`restaurant/${restaurantId}`, BASE_API);

  const response = await fetch(url.toString());
  const restaurant = await response.json();

  return restaurant;
}

export async function fetchDishes(restaurantId) {
  const url = new URL("dishes", BASE_API);
  url.searchParams.set("restaurantId", restaurantId);

  const response = await fetch(url.toString());
  const restaurant = await response.json();

  return restaurant;
}

export async function fetchDish(productId) {
  const url = new URL("dishes", BASE_API);
  url.searchParams.set("productId", productId);

  const response = await fetch(url.toString());

  return await response.json();
}

export async function fetchReviews(restaurantId) {
  const url = new URL("reviews", BASE_API);
  url.searchParams.set("restaurantId", restaurantId);

  const response = await fetch(url.toString(), {
    next: { tags: [`review_${restaurantId}`] },
  });

  return await response.json();
}

export async function revalidate(tag) {
  const response = await fetch(
    `http://localhost:3001/api/revalidate?tag=${tag}`
  );
  return await response.json();
}
