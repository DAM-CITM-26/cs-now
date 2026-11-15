import styles from './FilaEquipo.module.css'


function FilaEquipo({equipo, rondas, status})
{
    return(

        <div className={styles['equipo-info']}>
            <div >
                <img src={equipo.imagen} alt={equipo.nombre} style={{height: '25px'}}/>
                <span>{equipo.nombre}</span>
            </div>
            <span className= {status}>{rondas}</span>
        </div>
    )
}

export default FilaEquipo