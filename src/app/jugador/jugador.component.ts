import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  @Output('onActive')
  status:EventEmitter<boolean> = new EventEmitter <boolean>();
  @Output('offActive')
  status:EventEmitter<boolean> = new EventEmitter <boolean>();

  constructor() { }

  ngOnInit() {
  }
  activarJugador(){
    this.status.emit(true);
  }
  desactivarJugador(){
    this.status.emit(false);
  }
}
