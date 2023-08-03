import { useAttribute } from '@threekit-tools/treble';
import './HarnessLengthOptions.css';
const HarnessLengthOptions = () => {
    const [VC_L_CHG_TERM_POS, setVC_L_CHG_TERM_POS] = useAttribute('VC_L_CHG_TERM_POS');
   return (
      <>
      <div className='header'>
        <h2>{VC_L_CHG_TERM_POS?.label}</h2>
        <div className='button'>
          {VC_L_CHG_TERM_POS?.values.map((option, i) => (
            <button
              key={i}
              type="button"
              
              onClick={() => setVC_L_CHG_TERM_POS(option.assetId)? 'selectedbutton':'buttontext'}
              selected={option.assetId === VC_L_CHG_TERM_POS.value.assetId}
            >
             <div>{option.label} </div>
            </button>
          ))}
        </div>
      </div>
      
</>
  );
};

export default HarnessLengthOptions;