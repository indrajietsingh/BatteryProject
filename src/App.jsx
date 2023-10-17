import { ThreekitProvider } from '@threekit-tools/treble';
import './index.css'
import Main from './components/Main';
import Icon from './components/Header';
const App = () => {
  return (
    <>
    
      <ThreekitProvider>
      <Icon/>
        <Main />
        
      </ThreekitProvider>
      
    </>
  );
};
export default App;
