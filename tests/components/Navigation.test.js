import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navigation from '../../components/Navigation';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Navigation Component', () => {
  test('renders all navigation links', () => {
    render(
      <Router>
        <Navigation />
      </Router>
    );
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Payments')).toBeInTheDocument();
    expect(screen.getByText('Reports')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
  });
});