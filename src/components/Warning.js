import React from "react";

export const Warning = ({ errorMessage }) => {
  return (
    <div className="alert alert-warning" role="alert">{errorMessage}</div>
  );
}
