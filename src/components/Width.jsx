import { useAttribute } from '@threekit-tools/treble';
import { useState } from 'react';
const IndraWidth = () => {
  const [indrawidth, setIndraWidth] = useAttribute('indra width');
  const [inputValue, setinputValue] = useState(1);

  const handleSubmitFunction = (e) => {
    let getinputValue = e.target.value;
    setIndraWidth(getinputValue);
    setinputValue(getinputValue);
  }

  return (
    <>
      <div className='header'>
        <h2>{indrawidth?.label}</h2>
        <div className='inputdiv'>
       {(indrawidth)? <input className='radiusInput' min={indrawidth?.min} max={indrawidth?.max} value={inputValue} type="number" onChange={handleSubmitFunction}
        ></input> :null}     
      </div>
      </div>
    </>
  );
};

export default IndraWidth;