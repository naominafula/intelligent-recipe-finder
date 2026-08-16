import React from 'react';
import { ChefHat } from 'lucide-react';

export function Navigation() {
  return (
    <nav style={{
      display: 'flex', alignItems: 'center', gap: '1rem',
      padding: '1rem 0', borderBottom: '1px solid var(--border)'
    }}>
      <ChefHat size={32} color="var(--primary)" />
      <h2 style={{ margin: 0 }}>SmartChef Planner</h2>
    </nav>
  );
}