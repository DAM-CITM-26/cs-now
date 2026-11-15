import React from "react";
export function Marcador({ status, rondas }) {
  return (
    <div>
      <span className={status}>{rondas}</span>
    </div>
  );
}

export default Marcador;
