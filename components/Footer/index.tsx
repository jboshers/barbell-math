import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './index.module.css';

const Footer = ():JSX.Element => {
  const router = useRouter();
  return (
    <>
      { router.pathname !== '/' && (
        <Link href="/">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className={styles.back}>← Back to the Party</a>
        </Link>
      )}
      <footer className="footer">
        <a
          href="https://boshe.rs"
          target="_blank"
          rel="noopener noreferrer"
        >
          made by Boshe.rs
        </a>
      </footer>
    </>
  );
};

export default Footer;
