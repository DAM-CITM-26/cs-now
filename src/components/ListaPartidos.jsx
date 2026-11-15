import React from 'react'
import TarjetaPartido from './TarjetaPartido'

function ListaPartidos({ partidos, favoritos, vacio }) 
{
  if (partidos.length === 0) return Vacio({ icono: '🎯', texto: vacio })
  return (
  <div class="stack">{partidos.map((partido) => 
  <TarjetaPartido 
    partido = {partido} 
    favoritos={favoritos}
    />)}
  </div>)
}

export default ListaPartidos