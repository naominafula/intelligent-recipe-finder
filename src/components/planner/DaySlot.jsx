import React from 'react';
import { usePlanner } from '../../context/MealPlannerContext';
import { Trash2 } from 'lucide-react';

export function DaySlot({ day, recipe }) {
  const { removeRecipeFromDay } = usePlanner();

  return (
    <div style={{ borderBottom: '1px solid var(--border)', padding: '0.75rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <strong style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>{day}</strong>
        <div style={{ fontSize: '0.95rem', fontWeight: '500' }}>
          {recipe ? recipe.title : <span style={{ color: '#cbd5e1', fontStyle: 'italic' }}>No meal assigned</span>}
        </div>
      </div>
      {recipe && (
        <Trash2 size={16} color="#ef4444" style={{ cursor: 'pointer' }} onClick={() => removeRecipeFromDay(day)} />
      )}
    </div>
  );
}