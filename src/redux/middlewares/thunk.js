export const customThunk = (store) => (next) => (action) => {
  if (typeof action !== "function") {
    return next(action);
  }

  action(store.getState.bind(store), store.dispatch.bind(store));
};

// function fetchRestaurants(getState, dispatch) {

// }
