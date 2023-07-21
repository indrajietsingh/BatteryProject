import { useAttribute } from '@threekit-tools/treble';

const LidOptions = () => {
  const [Lid, setLid] = useAttribute('Lid');
  // const [VC_L_CHG_TERM_POS, setVC_L_CHG_TERM_POS] = useAttribute('VC_L_CHG_TERM_POS');
  // const[VC_L_SGNL_INTFC, setVC_L_SGNL_INTFC] = useAttribute(' VC_L_SGNL_INTFC');
  // const[VC_L_IQ_TYP, setVC_L_IQ_TYP] =useAttribute('VC_L_IQ_TYP');
  // const[H_CONN_COLOR,setH_CONN_COLOR] =useAttribute('H_CONN_COLOR');
    return (
    <>
    <div>
      <h2>{Lid?.label}</h2>
      <div>
        {Lid?.values.map((option, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setLid(option.assetId)}
            selected={option.assetId === Lid.value.assetId}
          >
           <div>{option.label} </div>
          </button>
        ))}
      </div>
    </div>

{/*<div>
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
<div>
      <h2>{VC_L_SGNL_INTFC?.label}</h2>
      <div>
        {VC_L_SGNL_INTFC?.values.map((option, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setVC_L_SGNL_INTFC(option.assetId)}
            selected={option.assetId === VC_L_SGNL_INTFC.value.assetId}
          >
           <div>{option.label} </div>
          </button>
        ))}
      </div>
    </div>
    <div>
      <h2>{VC_L_IQ_TYP?.label}</h2>
      <div>
        {VC_L_IQ_TYP?.values.map((option, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setVC_L_IQ_TYP(option.assetId)}
            selected={option.assetId === VC_L_IQ_TYP.value.assetId}
          >
           <div>{option.label} </div>
          </button>
        ))}
      </div>
    </div>
    <div>
      <h2>{H_CONN_COLOR?.label}</h2>
      <div>
        {H_CONN_COLOR?.values.map((option, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setH_CONN_COLOR(option.assetId)}
            selected={option.assetId === H_CONN_COLOR.value.assetId}
          >
           <div>{option.label} </div>
          </button>
        ))}
      </div>
    </div> */}

</>
  );
};

export default LidOptions;
