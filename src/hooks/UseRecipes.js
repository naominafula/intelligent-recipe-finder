// src/hooks/useRecipes.js
import { useState, useEffect } from 'react';
import { getRecipesByIngredients } from '../services/foodApi';

export function useRecipes(ingredientsArray) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Prevent firing expensive network queries on empty arrays
    if (ingredientsArray.length === 0) {
      setRecipes([]);
      return;
    }

    const fetchMatches = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getRecipesByIngredients(ingredientsArray);
        setRecipes(data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to match recipe data');
      } finally {
        setLoading(false);
      }
    };

    // Debounce strategy: Wait 500ms before sending request to save API quota
    const delayTimer = setTimeout(() => {
      fetchMatches();
    }, 500);

    return () => clearTimeout(delayTimer);
  }, [ingredientsArray]);

  return { recipes, loading, error };
}