import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

interface Props {
  title?: string,
  children: React.ReactNode,
  menu?: React.ReactNode
}

const Layout = ({ title = 'Home', children, menu }:Props):any => (
  <>
    <Head>
      <title>
        Barbell Math |
        {' '}
        {title}
      </title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
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
