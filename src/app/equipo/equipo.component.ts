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
    let icon1 = document.querySelector('.icon-status');
    icon1.className = 'icon-status-active';
    
  }
  desactivarEstado(event){
    this.status = event;
    let icon2 = document.querySelector('.icon-status-active');
    icon2.className = 'icon-status';
  }
}
