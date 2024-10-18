import { ApiBase } from "@/models/api-base"

export interface Facultad extends ApiBase {
   
       nombre_carrera: string,
        nombre_facultad:string,
        localidad: string,
        modalidad: string,
        t_ins: number,
        t_nue: number,
        t_ant: number,
        mat_ins: number,
        moras: number,
        porcentaje_mora: number,
        retirados: number,
        egresados: number,
        titulados: number,
        periodo: string
    
  }