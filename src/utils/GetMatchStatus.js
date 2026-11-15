export function GetMatchStatus(partido) {
  if (partido.marcadorA > partido.marcadorB) return partido.equipoA
  if (partido.marcadorB > partido.marcadorA) return partido.equipoB
  return null
}