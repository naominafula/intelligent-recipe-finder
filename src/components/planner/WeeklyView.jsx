import React from 'react';
import { usePlanner } from '../../context/MealPlannerContext';
import { DaySlot } from './DaySlot';

export function WeeklyView() {
  const { weeklyPlan } = usePlanner();

  return (
    <div style={{ backgroundColor: 'var(--card-bg)', padding: '1.25rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
      <h3>Weekly Schedule</h3>
      <div>
        {Object.entries(weeklyPlan).map(([day, recipe]) => (
          <DaySlot key={day} day={day} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}