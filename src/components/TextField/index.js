import React from "react";
import "./TextField.css";

export function TextField({ label, placeholder }) {
  return (
    <div className="field-text">
      <label>{label}</label>
      <input placeholder={placeholder} />
    </div>
  );
}
