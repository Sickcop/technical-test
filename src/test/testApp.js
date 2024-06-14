import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('toggleTheme function is called when ToggleButton is clicked', () => {
  const { getByText } = render(<App />);
  const toggleButton = getByText('Modo Diurno / Modo Nocturno');
  fireEvent.click(toggleButton);
  expect(document.body).toHaveStyle({ backgroundColor: '#333', color: '#fff' });
});
