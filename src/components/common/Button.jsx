import React from 'react';

export function Button({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  disabled = false,
  style = {} 
}) {
  const isSecondary = variant === 'secondary';
  
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    padding: '0.6rem 1rem',
    borderRadius: '6px',
    fontSize: '0.9rem',
    fontWeight: '500',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: isSecondary ? '1px solid var(--border)' : 'none',
    backgroundColor: disabled 
      ? '#cbd5e1' 
      : (isSecondary ? '#ffffff' : 'var(--primary)'),
    color: disabled 
      ? '#64748b' 
      : (isSecondary ? 'var(--text)' : '#ffffff'),
    transition: 'background-color 0.2s ease',
    ...style
  };

  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled} 
      style={baseStyle}
    >
      {children}
    </button>
  );
}