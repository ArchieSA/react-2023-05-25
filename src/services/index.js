class Api {
  #BASE_URL = '';
  constructor(url) {
    this.#BASE_URL = url;
  }

  async fetchDishes() {
    const response = await fetch(`${this.#BASE_URL}/dishes`);
    return await response.json();
  }

  async fetchUsers() {
    const response = await fetch(`${this.#BASE_URL}/users`);
    return await response.json();
  }

  async fetchRestaurants() {
    const response = await fetch(`${this.#BASE_URL}/restaurants`, {
      next: { tags: ['config'] },
    });
    return await response.json();
  }

  async fetchRestaurant(restaurantId) {
    const response = await fetch(
      `${this.#BASE_URL}/restaurant/${restaurantId}`
    );
    return await response.json();
  }

  async fetchReviewsByRestaurantId(restaurantId) {
    const response = await fetch(
      `${this.#BASE_URL}/reviews?restaurantId=${restaurantId}`
    );

    return await response.json();
  }

  async fetchDishesByRestaurantId(restaurantId) {
    const response = await fetch(
      `${this.#BASE_URL}/reviews?restaurantId=${restaurantId}`
    );

    return await response.json();
  }

  async fetchDishesByRestaurantId(restaurantId) {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
    );
    return await response.json();
  }
}

export const restaurantApi = new Api('http://localhost:3001/api');
