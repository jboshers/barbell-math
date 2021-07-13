/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import Layout from '../components/Layout';

const Index = ():any => (
  <Layout>
    <div>
      <p>Pick your poison.</p>
      <h3>Programs</h3>
      <Link href="/programs/madcow">
        <a>Madcow</a>
      </Link>
      <h3>Calendar</h3>
      <Link href="/calendar">
        <a>Madcow</a>
      </Link>
      <h3>Tools</h3>
      <Link href="/calculator">
        <a>Plate Calculator</a>
      </Link>
    </div>
  </Layout>
);

export default Index;
