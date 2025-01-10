/* src/components/FinancialChart.js */
  import { Bar } from 'react-chartjs-2';
  import styles from '../styles/FinancialChart.module.css';

  function FinancialChart({ data }) {
    const chartData = {
      labels: data.map((tenant) => tenant.name),
      datasets: [
        {
          label: 'Payment Balances',
          data: data.map((tenant) => tenant.balance),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };

    return (
      <div className={styles.chartContainer}>
        <h3 className={styles.chartTitle}>Financial Overview</h3>
        <Bar data={chartData} options={{ maintainAspectRatio: false }} />
      </div>
    );
  }

  export default FinancialChart;
  ```