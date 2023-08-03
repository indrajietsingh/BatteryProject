import { useAttribute } from '@threekit-tools/treble';
import './NexsysConnectorColorOptions.css';
const NexsysConnectorColorOptions= () => {
    const [VC_L_SGNL_INTFC, setVC_L_CHG_TERM_POS] = useAttribute('VC_L_SGNL_INTFC');
   return (
      <>
      <div className='header'>
        <h2>{VC_L_SGNL_INTFC?.label}</h2>
        <div>
          {VC_L_SGNL_INTFC?.values.map((option, i) => (
            <button
              key={i}
              type="button"
              className={option.assetId === VC_L_SGNL_INTFC.value.assetId ? 'selectedbutton' : 'buttontext'}
              onClick={() => setVC_L_CHG_TERM_POS(option.assetId)}
              // selected={option.assetId === VC_L_SGNL_INTFC.value.assetId}
            >
             <div>{option.label} </div>
            </button>
          ))}
        </div>
      </div>
      
</>
  );
};

export default NexsysConnectorColorOptions;