import { useAttribute } from "@threekit-tools/treble/dist";
import './Indramodel.css';
const Test = () => {
    const [indramodel, setindramodel] = useAttribute("indramodel");
    return (
        <>
            <h2>{indramodel?.label}</h2>
            {/* {console.log(indramodel, "indramodel")} */}
            <div className="button">
                {indramodel?.values.map((option, i) => (
                    <button
                        key={i} type="button"
                        className={option.assetId === indramodel.value.assetId  ? "modelbutton-selected-model" : "modelbutton-model"}
                        onClick={() => setindramodel(option.assetId)}>

                            <div>{option.label}</div> 
                    </button>
                       
                ))}
              

            </div>

        </>
    )
}
export default Test;