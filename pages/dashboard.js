import Head from 'next/head';
import Navigation from '../components/Navigation';
import TenantDashboard from '../components/TenantDashboard';
import LandlordDashboard from '../components/LandlordDashboard';
import { useSession } from 'next-auth/client';

export default function Dashboard() {
  const [session] = useSession();

  return (
    <div>
      <Head>
        <title>
          {session?.user?.role === 'landlord' ? 'Landlord' : 'Tenant'} Dashboard
        </title>
      </Head>
      <Navigation />
      <main>
        {session?.user?.role === 'tenant' ? <TenantDashboard /> : <LandlordDashboard />}
      </main>
    </div>
  );
}
