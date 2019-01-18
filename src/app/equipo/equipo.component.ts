import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit {
  nombre:string = 'Felinos';
  status:string = '';
  jugador:string = 'Carlos';
  equipo:string ='Cincocina F.S';
  constructor() { }

  ngOnInit() {
    this.nombre ='Cincocina Futsal';
  }

  agregarJugador(){
    let jugador = 'Sergio';
    jugador = 'Iván';
    this.jugador = jugador;
  }
  actualizarEstado(event){
    this.status = event;
  }
  desactivarEstado(event){
    this.status = event;
  }
}
