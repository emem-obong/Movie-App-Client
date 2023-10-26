import React, { useState } from "react";
import { PulseLoader } from "react-spinners";

const Loading = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#Fc4747");

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  return (
    <div className="text-center py-3 mx-4">
      <PulseLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
