import React from 'react'
import ListaPartidos from './ListaPartidos.jsx'
import PARTIDOS from '../data/partidos.json'
import EQUIPO from '../data/equipos.json'


function PantallaHoy({ estado }) {
  return (
    <section class="seccion stack">
      <ListaPartidos 
      partidos = {filtrarPorTorneo(PARTIDOS, estado.torneo)} 
      favoritos = {estado.favoritos}
      vacio = 'Hoy no hay partidos de este torneo.'
      />
      <p class="card-meta">⭐ = juega uno de tus equipos ${MarcaSprint({ sprint: 3 })}</p>
    </section>)
}

export default PantallaHoy
