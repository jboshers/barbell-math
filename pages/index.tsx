/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';
import styles from '../styles/pages/home.module.css';
import { Page } from '../types/madcow';

const Index = ({ title = 'Home' }:Page):any => (
  <Layout title="">
    <NextSeo
      title={title}
    />
    <div className={styles.base}>
      <h1 className={styles.heading}>Home</h1>
      <p>Pick your poison.</p>
      <h2 className={styles.linkHeading}>
        <Link href="/calendar">
          <a>Madcow Calendar</a>
        </Link>
      </h2>
      <p className={styles.info}>
        One of the many flavors of Bill Starr&rsquo;s 5x5 workouts.
        <br />
        This particular one is designed with the intermediate lifter in mind.
      </p>
      <h2 className={styles.linkHeading}>
        <Link href="/calculator">
          <a>Plate Calculator</a>
        </Link>
      </h2>
      <p className={styles.info}>
        I am lazy...
        <br />
        So I wrote a calculator because barbell math.
      </p>
    </div>
  </Layout>
);

export default Index;
