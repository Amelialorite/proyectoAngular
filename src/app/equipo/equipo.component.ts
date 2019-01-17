import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit {
  nombre:string = 'Felinos';
  status:boolean = true;
  jugador:string = 'Carlos';
  equipo:string ='Real Madrid';
  constructor() { }

  ngOnInit() {
    this.nombre ='Piratas';
  }

  agregarJugador(){
    let jugador = 'Sergio';
    jugador = 'Iván';
    this.jugador = jugador;
  }

}
