import { useAttribute } from '@threekit-tools/treble';
const TerminationPointOptions = () => {
    const [H_CONN_COLOR, setVC_L_CHG_TERM_POS] = useAttribute('H_CONN_COLOR');
   return (
      <>
      <div>
        <h2>{H_CONN_COLOR?.label}</h2>
        <div>
          {H_CONN_COLOR?.values.map((option, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setVC_L_CHG_TERM_POS(option.assetId)}
              selected={option.assetId === H_CONN_COLOR.value.assetId}
            >
             <div>{option.label} </div>
            </button>
          ))}
        </div>
      </div>
      
</>
  );
};

export default TerminationPointOptions;