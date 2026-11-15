import { useState } from 'react'
import styles from './BotonNotificar.module.css'


function BotonNotificar({ partidoId, onToggle}) {
  const [activo, SetEstado] = useState(false);
  const handleClick = (e) =>
    {
      e.preventDefault()
      e.stopPropagation() //según gemini, evita que el click se vaya hasta el padre
      const nuevoEstado = !activo
      SetEstado(nuevoEstado)

      console.log("activado");
      
      if(onToggle)
      {
        onToggle(partidoId, nuevoEstado)
      }
    }
  
  return (
  <button type='button' onClick={handleClick} className={`${styles.idle} ${activo ? styles.active : ''}`}></button>)
}

export default BotonNotificar;
