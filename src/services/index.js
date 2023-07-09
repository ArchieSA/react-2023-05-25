export async function fetchRestaurants() {
  const response = await fetch("http://localhost:3001/api/restaurants/", {
    next: { tags: ["config"] },
  });
  const restaurants = await response.json();

  return restaurants;
}

export async function fetchRestaurant(restaurantId) {
  const response = await fetch(
    `http://localhost:3001/api/restaurant/${restaurantId}`
  );
  const restaurant = await response.json();

  return restaurant;
}

export async function fetchDishes(restaurantId) {
  const response = await fetch(
    `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
  );
  const restaurant = await response.json();

  return restaurant;
}

export async function fetchReviews(restaurantId) {
  const response = await fetch(
    `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
  );
  const reviews = await response.json();

  return reviews;
}

export async function fetchNewReview(restaurantId) {
  const response = await fetch(
    `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
  );
  const reviews = await response.json();

  return reviews;
}

export async function fetchAllDishes() {
  const response = await fetch(
    `http://localhost:3001/api/dishes`
  );
  const restaurant = await response.json();

  return restaurant;
}
