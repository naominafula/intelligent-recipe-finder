import React from 'react';
import { MealPlannerProvider } from './context/MealPlannerContext';
import { Navigation } from './components/Navigation';
import { PantryInput } from './components/pantry/PantryInput';
import { WeeklyView } from './components/planner/WeeklyView';
import { GroceryList } from './components/grocery/GroceryList';
import { RecipeGrid } from './components/recipes/RecipeGrid';
import { useRecipeSearch } from './hooks/UseRecipeSearch';

export default function App() {
  const { recipes } = useRecipeSearch();

  return (
    <MealPlannerProvider>
      <div className="app-container">
        <Navigation />
        
        <div className="main-layout">
          {/* Left-Side Controls (Inputs & Output Records) */}
          <div className="dashboard-grid">
            <PantryInput />
            <WeeklyView />
            <GroceryList />
          </div>

          {/* Right-Side Dashboard Output Display */}
          <div>
            <RecipeGrid />
          </div>
        </div>
      </div>
    </MealPlannerProvider>
  );
}