import { ReactNode } from 'react';
import styles from './index.module.css';

type Props = {
 title: string,
 menu?: ReactNode
}
const Header = ({ title, menu }:Props):JSX.Element => (
  <header className={styles.base}>
    <h1>{title}</h1>
    {menu}
  </header>
);

export default Header;
