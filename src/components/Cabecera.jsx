import styles from "./Cabecera.module.css";

function Cabecera({}) {
  return (
    <header className={styles.Header}>
      <img src="src\iconos\Logo.png" alt="cs:now" className={styles.logo} />
      <div className={styles.row} style={{ gap: "4vw" }}>
        <input type="text" className={styles.finder} placeholder="Buscar" />
        <img
          src="src\iconos\Usuario.png"
          alt="Usuario"
          className={styles.user}
        />
      </div>
    </header>
  );
}

export default Cabecera;
