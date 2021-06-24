import Header from '../Header';
import Footer from '../Footer';

export interface Props {
  children: React.ReactNode
}

const Layout = ({ children }:Props):any => (
  <div className="container">
    <Header title="Barbell Math" />
    <main className="main">
      <div>{children}</div>
    </main>
    <Footer />
  </div>
);

export default Layout;
