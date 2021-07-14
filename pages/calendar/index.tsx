import { MadCowProvider } from '../../contexts/madcow/Provider';
import MadCowCalendar from '../../components/Calendar/MadCowCalendar';
import Layout from '../../components/Layout';
import Settings from '../../components/Calendar/Settings';

const Index = ():any => (
  <MadCowProvider>
    <Layout
      title="MadCow Calendar"
      menu={<Settings />}
    >
      <MadCowCalendar />
    </Layout>
  </MadCowProvider>
);

export default Index;
