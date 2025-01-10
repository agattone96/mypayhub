import Link from 'next/link';
import styles from '../styles/Navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/payments">Payments</Link>
        </li>
        <li>
          <Link href="/reports">Reports</Link>
        </li>
        <li>
          <Link href="/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
