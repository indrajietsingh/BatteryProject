import {
  ThreekitProvider,
  Player,
  PortalToElement,
  FlatForm,
} from '@threekit-tools/treble';
 import LidOptions from './components/LidOptions';
import TerminationPointOptions from './components/TerminationPointOptions';
import HarnessLengthOptions from './components/HarnessLengthOptions';
import NexsysConnectorColorOptions from './components/NexsysConnectorColorOptions';
import VC_L_CHRG_CONN_LENGTH from './components/VC_L_CHRG_CONN_LENGTH';

const App = () => {
  return (
    <>
    <ThreekitProvider>
      <div className="tk-treble-player">
        <Player />
      </div>
      <PortalToElement to="tk-treble-form" strict={true}>
     <LidOptions />
    <TerminationPointOptions/>
    <HarnessLengthOptions/>
    <NexsysConnectorColorOptions/>
    <VC_L_CHRG_CONN_LENGTH/>
    </PortalToElement>     
    </ThreekitProvider>
    
    </>
  );
};

export default App;
