import Header from '../Header';
import Footer from '../Footer';

interface Props {
  title?: string,
  children: React.ReactNode,
  menu?: React.ReactNode
}

const Layout = ({ title = 'Home', children, menu }:Props):any => (
  <>
    <div className="container">
      <Header title={title} menu={menu} />
      <main className="main">
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  </>
);

export default Layout;
