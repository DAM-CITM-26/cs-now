import React from "react";
import styles from "./FilaEquipo.module.css";
export function Marcador({ global, matchState }) {
  if (matchState == "En directo") {
  }
  return (
    <div>
      <span className={styles.Draw}>({global})</span>
    </div>
  );
}

export default Marcador;
