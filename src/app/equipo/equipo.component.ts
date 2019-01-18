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
    let div = document.querySelector('.icon-status');
    div.className = 'icon-status-active';
    
  }
  desactivarEstado(event){
    this.status = event;
    let div = document.querySelector('.icon-status-active');
    div.className = 'icon-status';
  }
}
