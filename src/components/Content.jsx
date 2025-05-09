import React from "react";
import { Container } from "./shared/Container";
import Search from "./Search";
import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import Spinner from "./Spinner";
import { useDebounce } from "react-use";

const API_BASE_URL = " https://api.spoonacular.com/recipes/";

const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

const Content = () => {
  const [recipe, setRecipe] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [debounceSearchTerm, setDebounceSearchTerm] = useState("");

  useDebounce(
    () => {
      setDebounceSearchTerm(searchTerm);
    },
    500,
    [searchTerm]
  );

  const fetchRecipe = async (query = "") => {
    setIsLoading(true);
    try {
      const endpoint = query
        ? `${API_BASE_URL}/recipes/complexSearch?query=${encodeURIComponent(
            query
          )}&apiKey=${API_KEY}`
        : `${API_BASE_URL}random?number=20&apiKey=${API_KEY}`;

      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error(
          "🔒 Oops! It looks like you haven't subscribed to Recipe Hive. Subscribe now to unlock unlimited access to delicious recipes and cooking features."
        );
      }
      const data = await response.json();
      if (response === 402) {
        setErrorMessage("Sorry you have reached the daily limit of request");
      }
      setRecipe(data.recipes || []);
      setSearchTerm(query);
    } catch (error) {
      console.error("Fetch failed:", error);
      setErrorMessage(
        "🔒 Oops! It looks like you haven't subscribed to Recipe Hive. Subscribe now to unlock unlimited access to delicious recipes and cooking features."
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipe(debounceSearchTerm);
  }, [debounceSearchTerm]);

  return (
    <div>
      <Container>
        <section className="all-recipes">
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          {isloading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className="text-red-950 font-extrabold text-2xl">
              {errorMessage}
            </p>
          ) : (
            <ul className="recipe-grid">
              {recipe.map((recipeItem) => (
                <li key={recipeItem.id}>
                  <RecipeCard recipe={recipeItem} />
                </li>
              ))}
            </ul>
          )}
        </section>
      </Container>
    </div>
  );
};

export default Content;
