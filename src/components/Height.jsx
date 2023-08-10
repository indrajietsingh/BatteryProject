import { useAttribute } from '@threekit-tools/treble';
import { useState } from 'react';
const IndraHeight =()=>{
 const[indraheight, setIndraHeight]=useAttribute('indra height');
const[inputvalue,setinputvalue]=useState(1);

const handlechangeFunction = (e) =>{
  let getinputValue=e.target.value;
  setIndraHeight(getinputValue);
setinputvalue(getinputValue);
} 
return (
  <>
    <div className='header'>
      <h2>{indraheight?.label}</h2>
      {(indraheight?.label) ?
        <input className='radiusInput' min={indraheight?.min} max={indraheight?.max} value={inputvalue} type="number" onChange={handlechangeFunction}></input> : ""
      }
    </div>

  </>
  );
};

export default IndraHeight;