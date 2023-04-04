import {gql} from '@apollo/client';

export const USUARIOS = gql `
query ObtenerUsuarios {
  obtenerUsuarios {
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
export const OFERTAS = gql `
query ObtenerOfertas {
  obtenerOfertas {
    codigo
    cargo
    descripcion
    empresa
    salario
    vacante
    createdAt
  }
}
`

