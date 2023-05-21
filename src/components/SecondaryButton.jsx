import React from "react";

const SecondaryButton = ({ children, ...otherProps }) => {
  return (
    <button className="btn btn-secondary" {...otherProps}>
      {children}
    </button>
  );
};

export default SecondaryButton;
