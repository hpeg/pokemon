import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './components/layout/Footer/Footer';

test('renders header', () => {
  render(
    <Footer/>
  );
  const linkElement = screen.getByText(/Made by Harry Pegrum/i);
  expect(linkElement).toBeInTheDocument();
});
