type Props = {
 title: string
}
const Header = ({ title }:Props):JSX.Element => (
  <header>
    <h1>{title}</h1>
  </header>
);

export default Header;
