import { combineReducers } from "redux";

// Import your reducers here
import favoritesReducer from "./favoritesReducer";

const rootReducer = combineReducers({
  // Add your reducers here
  favorites: favoritesReducer,
});

export default rootReducer;