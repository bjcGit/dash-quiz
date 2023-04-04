import {gql} from '@apollo/client';


export const NUEVO_REGISTRO = gql `
mutation NuevoUsuario($input: UsuarioInput) {
  nuevoUsuario(input: $input) {
    id
    tipoDocu
    numeroDocu
    nombres
    apellidos
    fechaNaci
    profesion
    aspiracion
    correo
    createdAt
  }
}
`
export const DESACTIVAR = gql `
mutation DesactivarUsuario($desactivarUsuarioId: ID!) {
  desactivarUsuario(id: $desactivarUsuarioId)
}
`