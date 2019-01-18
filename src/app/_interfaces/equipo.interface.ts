export interface Equipo{
    nombre: string,
    logo?: string; 
    estado: boolean, 
    jugadores: string[],
    updated: Date,  
    id?: string;
}
