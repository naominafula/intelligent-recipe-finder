import React from 'react';
import { X } from 'lucide-react';

export function IngredientTag({ name, onRemove }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
      backgroundColor: '#e0f2fe', color: '#0369a1',
      padding: '0.3rem 0.6rem', borderRadius: '20px', fontSize: '0.85rem'
    }}>
      {name}
      <X size={14} style={{ cursor: 'pointer' }} onClick={onRemove} />
    </span>
  );
}