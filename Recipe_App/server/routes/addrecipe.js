import express from "express";
import Recipe from "../model/recipeSchema.js"; 

const router = express.Router();


router.post("/add", async (req, res) => {
  try {
    const { name, ingredients, directions, category, image } = req.body;

    const newRecipe = new Recipe({
      name,
      ingredients,
      directions,
      category,
      image,
    });

    const savedRecipe = await newRecipe.save();

    res.status(201).json(savedRecipe);
  } catch (error) {
    res.status(500).json({ error: "Error adding the recipe to the database" });
  }
});

export default router;
