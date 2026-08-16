import React, { createContext, useContext, useState, useEffect } from 'react';

const MealPlannerContext = createContext();

const initialDays = {
  Monday: null, Tuesday: null, Wednesday: null,
  Thursday: null, Friday: null, Saturday: null, Sunday: null
};

export function MealPlannerProvider({ children }) {
  const [pantry, setPantry] = useState(() => {
    const saved = localStorage.getItem('pantry');
    return saved ? JSON.parse(saved) : ['tomato', 'chicken', 'onion'];
  });

  const [weeklyPlan, setWeeklyPlan] = useState(() => {
    const saved = localStorage.getItem('weeklyPlan');
    return saved ? JSON.parse(saved) : initialDays;
  });

  const [groceryList, setGroceryList] = useState([]);

  useEffect(() => {
    localStorage.setItem('pantry', JSON.stringify(pantry));
  }, [pantry]);

  useEffect(() => {
    localStorage.setItem('weeklyPlan', JSON.stringify(weeklyPlan));
    
    // Automatically compile standard missed ingredients into grocery list
    const missed = [];
    Object.values(weeklyPlan).forEach(recipe => {
      if (recipe?.missedIngredients) {
        recipe.missedIngredients.forEach(ing => {
          if (!missed.some(m => m.id === ing.id)) missed.push(ing);
        });
      }
    });
    setGroceryList(missed);
  }, [weeklyPlan]);

  const addIngredient = (item) => {
    const cleanItem = item.trim().toLowerCase();
    if (cleanItem && !pantry.includes(cleanItem)) {
      setPantry([...pantry, cleanItem]);
    }
  };

  const removeIngredient = (item) => {
    setPantry(pantry.filter(i => i !== item));
  };

  const assignRecipeToDay = (day, recipe) => {
    setWeeklyPlan(prev => ({ ...prev, [day]: recipe }));
  };

  const removeRecipeFromDay = (day) => {
    setWeeklyPlan(prev => ({ ...prev, [day]: null }));
  };

  return (
    <MealPlannerContext.Provider value={{
      pantry, addIngredient, removeIngredient,
      weeklyPlan, assignRecipeToDay, removeRecipeFromDay, groceryList
    }}>
      {children}
    </MealPlannerContext.Provider>
  );
}

export const usePlanner = () => useContext(MealPlannerContext);