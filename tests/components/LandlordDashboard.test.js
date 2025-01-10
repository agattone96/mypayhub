import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LandlordDashboard from '../../components/LandlordDashboard';

describe('LandlordDashboard Component', () => {
  test('renders tenant data', async () => {
    render(<LandlordDashboard />);
    const tenantRows = await screen.findAllByRole('row');
    expect(tenantRows.length).toBeGreaterThan(0);
  });
});