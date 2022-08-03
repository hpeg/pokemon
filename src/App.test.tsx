import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';

test('renders app', () => {
  render(
    <BrowserRouter>
    <Layout>
      <App/>
    </Layout>
  </BrowserRouter>
  );
  const linkElement = screen.getByText(/Pokemon!/i);
  expect(linkElement).toBeInTheDocument();
});
