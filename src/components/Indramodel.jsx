import { useAttribute } from '@threekit-tools/treble';

import './Indramodel.css';
const Indramodel = () => {
  const [indramodel, setindramodel] = useAttribute('indramodel');

  return (
    <>
      <div className='header'>
        <h2>{indramodel?.label}</h2>
        {console.log(indramodel,"indramodel")}
        <div className='button'>       
          {indramodel?.values.map((option, i) => (
            <button
              key={i}
              type="button"
              className={option.assetId === indramodel.value.assetId ? "modelbutton-selected-model" : "modelbutton-model"}
              onClick={() => setindramodel(option.assetId)}
            >
              <img style={{width:"100px"}} src={option.metadata?._thumbnail}/>
              <div>{option.label}</div>
             </button>
          ))}
        </div></div>
    </>
  );
};

export default Indramodel;
