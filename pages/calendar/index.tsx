import { NextSeo } from 'next-seo';
import { MadCowProvider } from '../../contexts/madcow/Provider';
import MadCowCalendar from '../../components/Calendar/MadCowCalendar';
import Layout from '../../components/Layout';
import Settings from '../../components/Calendar/Settings';
import { Page } from '../../types/madcow';

const Index = ({ title = 'Program Calendar' }:Page):any => (
  <MadCowProvider>
    <Layout
      title={title}
      menu={<Settings />}
    >
      <NextSeo
        title={title}
      />
      <MadCowCalendar />
    </Layout>
  </MadCowProvider>
);

export default Index;
