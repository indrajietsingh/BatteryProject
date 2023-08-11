import { ThreekitProvider } from '@threekit-tools/treble';
import './index.css'
import Main from './components/Main';

const App = () => {
  return (
    <>
      <ThreekitProvider>
        <Main />
      </ThreekitProvider>
    </>
  );
};
export default App;
