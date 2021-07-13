import Layout from '../../../components/Layout';
import MadCow from '../../../components/programs/MadCow';
import { MadCowProvider } from '../../../contexts/madcow/Provider';

const Index = ():any => (
  <Layout title="MadCow Program Generator">
    <MadCowProvider>
      <MadCow />
    </MadCowProvider>
  </Layout>
);

export default Index;
