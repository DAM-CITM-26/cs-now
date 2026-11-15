function LogoEquipo ({equipo})
{
    return(
        <img
            src={equipo.imagen}
            alt={equipo.nombre}
            style={{ height: "25px" }}
        />
    )
}

export default LogoEquipo