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
    let btn0 = document.querySelector('#on_.mat-stroked-button');
    btn0.className = 'mat-stroked-button-active';
    let btn1 = document.querySelector('#off_.mat-stroked-button-active');
    btn1.className = 'mat-stroked-button';
   
  }
  desactivarJugador(){
    this.statusoff.emit('Inactivo');
    let btn2 = document.querySelector('#on_.mat-stroked-button-active');
    btn2.className = 'mat-stroked-button';
    let btn3 = document.querySelector('#off_.mat-stroked-button');
    btn3.className = 'mat-stroked-button-active';
    
  }
}
