// RecipeCard.jsx
import React from "react";
import PosterImg from "/no-poster-bg.png";

const RecipeCard = ({ recipe }) => {
  if (!recipe) return null;

  const { title, vegetarian, readyInMinutes, id, extendedIngredients } = recipe;

  return (
    <div className="recipe-card">
      <img
        src={
          id
            ? `https://img.spoonacular.com/recipes/${id}-556x370.jpg`
            : "/no-poster-bg.png"
        }
        alt={title}
      />

      <div className="mt-4">
        <h5>{title}</h5>

        <div className="content">
          <div className="veg-indicator">
            <p>Vegetarian: {vegetarian ? "✅" : "❌"}</p>
          </div>

          <span>•</span>
          <p className="duration">Ready in: {readyInMinutes} mins</p>
        </div>
        <details className="ingredients-details">
          <summary>Ingredients</summary>
          <ul>
            {extendedIngredients.map((ingredient, index) => (
              <li key={index}>• {ingredient.original}</li>
            ))}
          </ul>
        </details>
      </div>
    </div>
  );
};

export default RecipeCard;

// <p>Vegetarian: {vegetarian ? "✅" : "❌"}</p>
