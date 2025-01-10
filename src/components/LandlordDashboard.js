/* src/components/LandlordDashboard.js */
  import { useState, useEffect } from 'react';
  import FinancialChart from './FinancialChart';
  import styles from '../styles/LandlordDashboard.module.css';

  function LandlordDashboard() {
    const [tenants, setTenants] = useState([]);

    useEffect(() => {
      async function fetchTenantData() {
        const response = await fetch('/api/landlord/tenants');
        const data = await response.json();
        setTenants(data);
      }
      fetchTenantData();
    }, []);

    return (
      <div className={styles.dashboard}>
        <h2>Landlord Dashboard</h2>
        <table className={styles.tenantTable}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {tenants.map((tenant) => (
              <tr key={tenant.id}>
                <td>{tenant.name}</td>
                <td>{tenant.paymentStatus}</td>
                <td>{tenant.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <FinancialChart data={tenants} />
      </div>
    );
  }

  export default LandlordDashboard;
  ```