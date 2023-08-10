import { useAttribute } from '@threekit-tools/treble';
import "./IndraTestColor.css"
const IndraTestColor= () => {
    const [IndraTestColor,setIndraTestColor] = useAttribute('indratestcolor');
    

   return (
      <>
      <div className='header'>
        <h2>{IndraTestColor?.label}</h2>
        <div className='button'>
          {IndraTestColor?.values.map((option, i) => (
            
            <button
            key={i}
            type="button"
            className=
          {option.assetId === IndraTestColor.value.assetId ? "modelbutton-selected": "modelbutton" }
            onClick={() => setIndraTestColor(option.assetId)}
              selected={option.assetId === IndraTestColor.value.assetId}
            >
             <div>{option.label} </div>
            </button>
          ))}
        </div>
      </div>
      
       
</>
  );
};

export default IndraTestColor;