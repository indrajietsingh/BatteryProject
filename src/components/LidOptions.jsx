import { useAttribute } from '@threekit-tools/treble';

import "./Lid.css";
const LidOptions = () => {
  const [Lid, setLid] = useAttribute('Lid');

  return (
    <>
      <h2>{Lid?.label}</h2>
      <div>
        {Lid?.values.map((option, i) => (
          <button
            key={i}
            type="button"
            className={option.assetId === Lid.value.assetId ? 'selectedbutton' : 'buttontext'}
            onClick={() => setLid(option.assetId)}

          >

          <div>{option.label}

            </div>

          </button>
        ))}
      </div>

    </>
  );
};

export default LidOptions;
