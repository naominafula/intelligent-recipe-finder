import React from 'react';
import { usePlanner } from '../../context/MealPlannerContext';
import { ShoppingBag } from 'lucide-react';

export function GroceryList() {
  const { groceryList } = usePlanner();

  return (
    <div style={{ backgroundColor: 'var(--card-bg)', padding: '1.25rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
      <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <ShoppingBag size={20} color="var(--primary)" /> Smart Shopping List
      </h3>
      {groceryList.length === 0 ? (
        <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Assign scheduled meals to calculate your missing groceries.</p>
      ) : (
        <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
          {groceryList.map(item => (
            <li key={item.id} style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>
              {item.name} <span style={{ color: 'var(--text-light)', fontSize: '0.8rem' }}>({item.amount} {item.unit})</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}