export function GetTeam(id, listaEquipos) {
  return listaEquipos.find(e => e.nombre === id) || { nombre: 'Desconocido', imagen: '', pais: '' }
}
