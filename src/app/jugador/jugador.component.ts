import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { setClassMetadata } from '@angular/core/src/render3';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.scss']
})
export class JugadorComponent implements OnInit {
  @Input('nombre')
  jugador:string = 'Sergio';
  
  @Input('equipo')
  equipo:string ='Sin equipo';

  @Output('on')
  status:EventEmitter<string> = new EventEmitter <string>();
  @Output('off')
  statusoff:EventEmitter<string> = new EventEmitter <string>();

  constructor() { }

  ngOnInit() {
  }
  activarJugador(){
    this.status.emit('Activo');
  }
  desactivarJugador(){
    this.statusoff.emit('Inactivo');
  }
}
