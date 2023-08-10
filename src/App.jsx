import {
  ThreekitProvider,
  Player,
  PortalToElement,
  FlatForm,} from '@threekit-tools/treble';
import Indramodel from './components/indramodel';
 import SphereRadius from './components/SphereRadius';
import IndraTestColor from './components/IndraTestColor';
import IndraHeight from './components/Height';
import IndraWidth from './components/Width';
const App = () => {
  return (
    <>
    <ThreekitProvider>
      <div className="tk-treble-player">
        <Player/>
      </div>
      <PortalToElement to="tk-treble-form" strict={true}>
     <Indramodel/>
     <IndraTestColor/>
     <SphereRadius/>
     <IndraHeight/>
      <IndraWidth/> 
    </PortalToElement>     
    </ThreekitProvider>
    
    </>
  );
};

export default App;
