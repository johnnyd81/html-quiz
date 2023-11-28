import { useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const Loader = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <div>
      <ScaleLoader
        color={color}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
