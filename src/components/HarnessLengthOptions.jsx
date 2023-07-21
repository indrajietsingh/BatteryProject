import { useAttribute } from '@threekit-tools/treble';
const HarnessLengthOptions = () => {
    const [VC_L_CHG_TERM_POS, setVC_L_CHG_TERM_POS] = useAttribute('VC_L_CHG_TERM_POS');
   return (
      <>
      <div>
        <h2>{VC_L_CHG_TERM_POS?.label}</h2>
        <div>
          {VC_L_CHG_TERM_POS?.values.map((option, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setVC_L_CHG_TERM_POS(option.assetId)}
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