import Prism from 'prismjs';
import { useEffect } from 'react';
import 'prismjs/components/prism-json.min';
import 'prismjs/themes/prism-okaidia.css';

// <Debugger code={JSON.stringify(state, null, '\t')} />

type Props = {
  code: string
}

const Index = ({ code }:Props):JSX.Element => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);
  return (
    <>
      <hr />
      <h5>Debug State</h5>
      <pre>
        <code className="language-json">{code}</code>
      </pre>
    </>
  );
};

export default Index;
