import { useAttribute } from '@threekit-tools/treble';
import { useState } from 'react';
import './SphereRadius.css';
const SphereRadius = () => {
  const [sphereradius, setSphereRadius] = useAttribute('sphere radius');
  const [inputValue, setinputValue] = useState(1);

  const handleInputFunction = (e) => {
    let getinputValue = e.target.value;
    setSphereRadius(getinputValue);
    setinputValue(getinputValue);
  }

  return (
    <>
      <div className='header'>
        <h2>{sphereradius?.label}</h2>
        {(sphereradius?.label) ?
          <input className='radiusInput' min={sphereradius?.min} max={sphereradius?.max} value={inputValue} type="number" onChange={handleInputFunction}></input> : ""
        }
      </div>

    </>
  );
};

export default SphereRadius;