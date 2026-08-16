import React, { useState } from 'react';
import { usePlanner } from '../../context/MealPlannerContext';
import { IngredientTag } from './IngredientTag';
import { Plus } from 'lucide-react';

export function PantryInput() {
  const { pantry, addIngredient, removeIngredient } = usePlanner();
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addIngredient(inputValue);
      setInputValue('');
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--card-bg)', padding: '1.25rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
      <h3>My Pantry Fridge Inventory</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Add ingredient (e.g. Garlic, Beef)"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ flex: 1, padding: '0.6rem', borderRadius: '6px', border: '1px solid var(--border)' }}
        />
        <button type="submit" style={{ backgroundColor: 'var(--primary)', color: 'white', border: 'none', padding: '0.6rem', borderRadius: '6px', cursor: 'pointer' }}>
          <Plus size={18} />
        </button>
      </form>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {pantry.map(item => (
          <IngredientTag key={item} name={item} onRemove={() => removeIngredient(item)} />
        ))}
      </div>
    </div>
  );
}