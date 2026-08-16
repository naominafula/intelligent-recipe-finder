import React, { useState } from 'react';
import { usePlanner } from '../../context/MealPlannerContext';
import { Calendar } from 'lucide-react';

export function RecipeCard({ recipe }) {
  const { assignRecipeToDay, weeklyPlan } = usePlanner();
  const [selectedDay, setSelectedDay] = useState('Monday');

  return (
    <div style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <img src={recipe.image} alt={recipe.title} style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
      <div style={{ padding: '1rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'between' }}>
        <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem' }}>{recipe.title}</h4>
        
        <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', margin: '0 0 1rem 0' }}>
          Uses {recipe.usedIngredientCount} pantry items ({recipe.missedIngredientCount} missing)
        </p>

        <div style={{ display: 'flex', gap: '0.25rem', marginTop: 'auto' }}>
          <select 
            value={selectedDay} 
            onChange={(e) => setSelectedDay(e.target.value)}
            style={{ padding: '0.4rem', borderRadius: '4px', border: '1px solid var(--border)', fontSize: '0.85rem' }}
          >
            {Object.keys(weeklyPlan).map(day => <option key={day} value={day}>{day}</option>)}
          </select>
          <button 
            onClick={() => assignRecipeToDay(selectedDay, recipe)}
            style={{ flex: 1, backgroundColor: 'var(--primary)', color: 'white', border: 'none', borderRadius: '4px', padding: '0.4rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem', fontSize: '0.85rem' }}
          >
            <Calendar size={14} /> Add
          </button>
        </div>
      </div>
    </div>
  );
}