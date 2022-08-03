import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './components/layout/Header/Header';

test('renders header', () => {
  render(
    <Header/>
  );
  const linkElement = screen.getByText(/Pokemon!/i);
  expect(linkElement).toBeInTheDocument();
});
