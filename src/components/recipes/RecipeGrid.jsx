import React from 'react';
import { usePlanner } from '../../context/MealPlannerContext';
import { useRecipeSearch } from '../../hooks/UseRecipeSearch';
import { RecipeCard } from './RecipeCard';

export function RecipeGrid() {
  const { pantry } = usePlanner();
  const { recipes, loading, error } = useRecipeSearch(pantry);

  if (pantry.length === 0) return <p style={{ color: 'var(--text-light)' }}>Add ingredients to your pantry inventory to look up matching recipes.</p>;
  if (loading) return <p>Searching Spoonacular match databases...</p>;
  if (error) return <p style={{ color: '#ef4444' }}>{error}</p>;

  return (
    <div>
      <h3 style={{ marginBottom: '1rem' }}>Matching Meal Matches</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}