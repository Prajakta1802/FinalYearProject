import React from "react";

const PrimaryButton = ({ children, ...otherProps }) => {
  return (
    <button className="btn btn-primary" {...otherProps}>
      {children}
    </button>
  );
};

export default PrimaryButton;
