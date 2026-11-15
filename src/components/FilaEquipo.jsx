import styles from "./FilaEquipo.module.css";

function FilaEquipo({ equipo, ganando}) {
  return (
    <div className={styles["equipo-info"]}>

        <span className={ganando? styles.Ganando : ""} style={{whiteSpace: "nowrap"}}>{equipo.nombre}</span>

    </div>
  );
}

export default FilaEquipo;
