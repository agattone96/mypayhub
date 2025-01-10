import { useState, useEffect } from 'react';
import styles from '../styles/TenantDashboard.module.css';

function TenantDashboard() {
  const [financialDetails, setFinancialDetails] = useState({
    totalPayments: 0,
    lateFees: 0,
    remainingBalance: 0,
  });

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/tenant/financials');
      const data = await response.json();
      setFinancialDetails(data);
    }
    fetchData();
  }, []);

  return (
    <div className={styles.dashboard}>
      <h2>Tenant Dashboard</h2>
      <div className={styles.financialDetails}>
        <div>Total Payments: {financialDetails.totalPayments}</div>
        <div>Late Fees: {financialDetails.lateFees}</div>
        <div>Remaining Balance: {financialDetails.remainingBalance}</div>
      </div>
    </div>
  );
}

export default TenantDashboard;
