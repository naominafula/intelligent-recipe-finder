import React from 'react';

export function Spinner({ size = 24, color = 'var(--primary)' }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '1rem 0' }}>
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          border: `3px solid #e2e8f0`,
          borderTop: `3px solid ${color}`,
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }}
      />
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}