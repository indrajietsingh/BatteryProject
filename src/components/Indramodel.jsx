import { useAttribute } from '@threekit-tools/treble';


const Indramodel =() => {
  const [indramodel, setindramodel] = useAttribute('indramodel');

  return (
    <>
      <h2>{indramodel?.label}</h2>
      <div>
        {indramodel?.values.map((option, i) => (
          <button
            key={i}
            type="button"
            className={option.assetId === indramodel.value.assetId }
            onClick={() => setindramodel(option.assetId)}

          >
            <div>{option.label}

            </div>

          </button>
        ))}
      </div>

    </>
  );
};

export default Indramodel;
