import { useState } from "react";
import ListaPartidos from "./components/ListaPartidos.jsx";
import PantallaHoy from "./components/PantallaHoy.jsx";
import Chip from "./components/Chip.jsx";

import PARTIDOS from "./data/partidos.json";
import EQUIPOS from "./data/equipos.json";
import TORNEOS from "./data/torneos.json";
import TarjetaPartido from "./components/TarjetaPartido.jsx";
import LogoEquipo from "./components/LogoEquipo.jsx";
import { GetTournament } from "./utils/GetTournament.js";

import styles from "./components/Screen1.module.css";
import Cabecera from "./components/Cabecera.jsx";

function cargar(clave, inicial) {
  const guardado = localStorage.getItem("cs-now-" + clave);
  return guardado ? JSON.parse(guardado) : inicial;
}

function guardar(clave, valor) {
  localStorage.setItem("cs-now-" + clave, JSON.stringify(valor));
}

const estado = {
  torneo: "Todos", // P1 · chips de torneo
  favoritos: cargar("favoritos", []), // P4 · ids de los equipos que sigo (se recuerdan)
  capa: null,
  aviso: null,
};

function App() {
  //console.log('partidos', PARTIDOS)
  //console.log('Equipos', EQUIPOS)
  const separated = {};
  for (const match of PARTIDOS) {
    if (!separated[match.torneo]) {
      separated[match.torneo] = [match];
    } else {
      separated[match.torneo].push(match);
    }
  }
  //console.log(separated);

  return (
    <main>
      <main className={styles.main}>
        <Cabecera />
        <section className={styles.partidosList}>
          {Object.entries(separated).map(([torneo, partidosDelTorneo]) => (
            <div key={torneo} style={{ padding: "0 0 3vh 0" }}>
              <div className={styles.row} style={{ justifyContent: "center" }}>
                <LogoEquipo equipo={GetTournament(torneo, TORNEOS)} />
                <Chip info={torneo} />
              </div>

              {partidosDelTorneo.map((partido) => (
                <TarjetaPartido
                  key={partido.id}
                  partido={partido}
                  equipos={EQUIPOS}
                />
              ))}
            </div>
          ))}
        </section>
      </main>
    </main>
  );
}

export default App;
