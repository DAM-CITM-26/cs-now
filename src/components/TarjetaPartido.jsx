import FilaEquipo from "./FilaEquipo";
import { GetTeam } from "../helpers/GetTeam.js";
import { GetMatchStatus } from "../helpers/GetMatchStatus.js";
import styles from "./TarjetaPartido.module.css";
import stylesFila from "./FilaEquipo.module.css";
import Marcador from "./Marcador.jsx";
import MarcadorGlobal from "./MarcadorGlobal.jsx";
import BotonNotificar from "./BotonNotificar.jsx";
import LiveChip from "./LiveChip.jsx";

function TarjetaPartido({ partido, equipos }) {
  const equipoA = GetTeam(partido.equipoA, equipos);
  const equipoB = GetTeam(partido.equipoB, equipos);
  const empezado = partido.estado !== "proximo";

  const ganador = GetMatchStatus(partido);

  let statusA = stylesFila.Draw;
  let statusB = stylesFila.Draw;

  if (ganador == partido.equipoA) {
    statusA = stylesFila.Winning;
    statusB = stylesFila.Losing;
  } else if (ganador == partido.equipoB) {
    statusB = stylesFila.Winning;
    statusA = stylesFila.Losing;
  }

  return (
    <div>
      <a className={styles.card}>
        <div className={styles.row} style={{ justifyContent: "space-between" }}>
          <div className={styles.row}>
            {partido.estado === "En directo" ? (
              <div className={styles.column}>
                <LiveChip />
                <span>{partido.tipo} </span>
              </div>
            ) : (
              <div className={styles.column}>
                <span>{partido.hora} </span>
                <span>{partido.tipo} </span>
              </div>
            )}

            <div className={styles.column}>
              <FilaEquipo equipo={equipoA} />
              <FilaEquipo equipo={equipoB} />
            </div>
          </div>

          {partido.estado === "En directo" ? (
            <div className={styles.row} style={{ gap: "10px" }}>
              <div className={styles.column}>
                <Marcador rondas={partido.marcadorA} status={statusA} />
                <Marcador rondas={partido.marcadorB} status={statusB} />
              </div>

              <div className={styles.column}>
                <MarcadorGlobal
                  global={partido.globalA}
                  matchState={partido.estado}
                />
                <MarcadorGlobal
                  global={partido.globalB}
                  matchState={partido.estado}
                />
              </div>
            </div>
          ) : (
            <BotonNotificar />
          )}
        </div>
      </a>
    </div>
  );
}

export default TarjetaPartido;
