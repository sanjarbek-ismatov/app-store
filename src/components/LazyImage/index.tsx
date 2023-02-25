import React, { FC, useState } from "react";

const Lazyimage: FC<{ icon: string }> = ({ icon }) => {
  const [load, setLoad] = useState(false);
  return (
    <div className="position-relative d-flex justify-content-center align-content-center">
      {!load && (
        <div className="spinner-border text-primary position-absolute"></div>
      )}
      <img
        src={icon}
        onLoad={() => setLoad(true)}
        style={{ height: "auto", width: "200px" }}
        className="card-img-top mx-auto rounded rounded-2"
      />
    </div>
  );
};

export default Lazyimage;
