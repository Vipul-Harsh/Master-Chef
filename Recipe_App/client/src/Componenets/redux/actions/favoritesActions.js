export const addFavorite = (recipe) => {
  return {
    type: "ADD_FAVORITE",
    payload: recipe,
  };
};

export const removeFavorite = (recipe) => {
  return {
    type: "REMOVE_FAVORITE",
    payload: recipe,
  };
};