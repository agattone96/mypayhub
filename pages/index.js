import Head from 'next/head';
import Navigation from '../components/Navigation';
import '../styles/globals.css';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Rent Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <main>
        <h1>Welcome to the Rent Tracking Portal</h1>
      </main>
    </div>
  );
}
