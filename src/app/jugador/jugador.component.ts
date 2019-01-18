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

  @Output('on')
  status:EventEmitter<string> = new EventEmitter <string>();
  @Output('off')
  statusoff:EventEmitter<string> = new EventEmitter <string>();

  constructor() { }

  ngOnInit() {
  }
  activarJugador(){
    this.status.emit('Activo');

    let div = document.querySelector('.mat-stroked-button');
    div.className = 'mat-stroked-button-active';
   
  }
  desactivarJugador(){
    this.statusoff.emit('Inactivo');
    
  }
}
