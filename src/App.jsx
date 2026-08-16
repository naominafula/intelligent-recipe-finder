// src/App.jsx
import React, { useState } from 'react';
import { useRecipes } from './hooks/useRecipes';
import { RecipeList } from './components/RecipeList';

export default function App() {
  const [pantry, setPantry] = useState(['tomato', 'onion']);
  const { recipes, loading, error } = useRecipes(pantry);

  const handleAddIngredient = (item) => {
    if (item && !pantry.includes(item)) {
      setPantry([...pantry, item.toLowerCase().trim()]);
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>🥗 Intelligent Recipe Finder</h1>
      </header>

      <main>
        {/* Simple inline test controller to modify state */}
        <button onClick={() => handleAddIngredient('garlic')}>
          Quick Add Garlic
        </button>

        <p>Active Pantry Items: {pantry.join(', ')}</p>

        {loading && <p>Searching matching database records...</p>}
        {error && <p className="error">{error}</p>}
        
        {!loading && !error && <RecipeList items={recipes} />}
      </main>
    </div>
  );
}