import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Jugador } from './../_interfaces/jugador.interface';
@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.scss']
})
export class JugadorComponent implements OnInit {
  @Input('jugador')
  // jugador:string = 'Sergio';
  jugador: Jugador;
  
  @Input('equipo')
  equipo:string ='Sin equipo';

  @Output('on')
  status:EventEmitter<boolean> = new EventEmitter <boolean>();
  @Output('off')
  statusoff:EventEmitter<boolean> = new EventEmitter <boolean>();

  constructor() { }

  ngOnInit() {
  }
  activarJugador(){
    this.status.emit(true);
    
  }

}
