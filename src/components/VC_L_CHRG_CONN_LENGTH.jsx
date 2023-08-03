import { useAttribute } from '@threekit-tools/treble';
const VC_L_CHRG_CONN_LENGTH = () => {
    const [VC_L_CHRG_CONN_LENGTH, setVC_L_CHRG_CONN_LENGTH] = useAttribute('VC_L_CHRG_CONN_LENGTH');
   return (
      <>
      <div className='header'>
        <h2>{VC_L_CHRG_CONN_LENGTH?.label}</h2>
        <div>
          {VC_L_CHRG_CONN_LENGTH?.values.map((option, i) => (
            <button
              key={i}
              type="button"
              className={option.assetId === VC_L_CHRG_CONN_LENGTH.value.assetId ? 'selectedbutton' : 'buttontext'}
              onClick={() => setVC_L_CHRG_CONN_LENGTH(option.assetId)}
              // selected={option.assetId ===VC_L_CHRG_CONN_LENGTH.value.assetId}
            >
             <div>{option.label} </div>
            </button>
          ))}
        </div>
      </div>
      
</>
  );
};

export default VC_L_CHRG_CONN_LENGTH;