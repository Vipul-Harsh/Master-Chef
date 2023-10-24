import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingridents: {
    type: [String],
    required: true,
  },

  Directions: {
    type: [String],
    required: true,
  },
  Category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
});

const Recipe = mongoose.model("recipes", recipeSchema);
export default Recipe;
