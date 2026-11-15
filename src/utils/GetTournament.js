export function GetTournament(id, listaTorneos) {
  return listaTorneos.find(e => e.nombre === id) || { nombre: 'Desconocido', localizacion: '', imagen: '' }
}
