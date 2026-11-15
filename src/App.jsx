import { useState } from "react";
import ListaPartidos from "./components/ListaPartidos.jsx";
import PantallaHoy from "./components/PantallaHoy.jsx";
import Chip from "./components/Chip.jsx";

import PARTIDOS from "./data/partidos.json";
import EQUIPOS from "./data/equipos.json";
import TarjetaPartido from "./components/TarjetaPartido.jsx";

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
      <h1>CS:NOW</h1>

      <section>
        {Object.entries(separated).map(([torneo, partidosDelTorneo]) => (
          <div key={torneo}>
            <Chip info={torneo} />
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
  );
}

export default App;
