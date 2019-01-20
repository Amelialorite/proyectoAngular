import { Component, OnInit } from '@angular/core';
import { Jugador } from './../_interfaces/jugador.interface';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit {
  nombre: string = 'Felinos';
  status: string = '';
  //jugador:string = 'Carlos';

  jugador: Jugador = {
    nombre: "Juan",
    edad: "25",
    apodo: "Felino",
    foto: "imageJuan.jpg",
    posicion: "Delantero",
    estado: false,
    id: "dkjdkdk3434"

  }
  equipo: string = 'Cincocina F.S';
  constructor() { }

  ngOnInit() {
    this.nombre = 'Cincocina Futsal';
  }

  agregarJugador() {
    let jugador = 'Sergio';
    jugador = 'Iván';
    this.jugador.nombre = jugador;
  }
  actualizarEstado(event) {
    this.jugador.estado = event;
   // this.status = event;
    let icon1 = document.querySelector('.icon-status');
    icon1.classList.toggle("-active");

  }
  desactivarEstado(event) {
    this.jugador.estado = event;
    let icon1 = document.querySelector('.icon-status');
    icon1.classList.toggle("-active");
    
  }
}
