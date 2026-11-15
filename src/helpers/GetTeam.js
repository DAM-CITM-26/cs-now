export function GetTeam(id, listaEquipos) {
  return listaEquipos.find(e => e.id === id) || { nombre: 'Desconocido', imagen: '', pais: '' }
}
