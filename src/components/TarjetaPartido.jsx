
import FilaEquipo from './FilaEquipo'
import {GetTeam}  from '../helpers/GetTeam.js'
import {GetMatchStatus}  from '../helpers/GetMatchStatus.js'
import styles from './TarjetaPartido.module.css'
import stylesFila from './FilaEquipo.module.css' 
function TarjetaPartido({ partido, equipos }) {

  const equipoA = GetTeam(partido.equipoA, equipos)
  const equipoB = GetTeam(partido.equipoB, equipos)
  const empezado = partido.estado !== 'proximo'

  const ganador = GetMatchStatus(partido)
    
  let statusA = stylesFila.Draw
  let statusB = stylesFila.Draw

    if(ganador == partido.equipoA)
    {
        statusA = stylesFila.Winning
        statusB = stylesFila.Losing
    }
    else if(ganador == partido.equipoB)
    {
        statusB = stylesFila.Winning
        statusA = stylesFila.Losing
    }
  
  return (
    <div>
      <a className="card">
            <div className = "card-cuerpo">
              <div className="row" style={{ justifyContent: 'space-between' }}>
                <FilaEquipo equipo = {equipoA} rondas = {partido.marcadorA} status={statusA}/>
                <FilaEquipo equipo = {equipoB} rondas = {partido.marcadorB} status={statusB}/>
              </div>
            </div>

      </a>
      
    </div>

  )
}

export default TarjetaPartido