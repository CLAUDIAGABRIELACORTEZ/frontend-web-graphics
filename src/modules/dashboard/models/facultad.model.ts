
export interface Facultad{
  id_facultad: string
  nombre_facultad: string
  carreras: Carreas[]
}

// export interface CreateUser extends Partial<Omit<User, 'role' | 'branch' | 'gender'>> {
//   roleId?: string
//   branchId?: string
// }


export interface Carreas{
    id_carrera: string
    nombre_carrera: string
  }
export interface UpdateUser { }
