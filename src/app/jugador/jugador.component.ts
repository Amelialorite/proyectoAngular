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
  status:EventEmitter<boolean> = new EventEmitter <boolean>();

  constructor() { }

  ngOnInit() {
  }
  activarJugador(){
    this.status.emit(true);
    let btn0 = document.querySelector('#on_.mat-stroked-button');
    btn0.className = 'mat-stroked-button-active';
    let btn1 = document.querySelector('#off_.mat-stroked-button-active');
    btn1.className = 'mat-stroked-button';
   
  }
  desactivarJugador(){
    this.status.emit(false);
    let btn2 = document.querySelector('#on_.mat-stroked-button-active');
    btn2.className = 'mat-stroked-button';
    let btn3 = document.querySelector('#off_.mat-stroked-button');
    btn3.className = 'mat-stroked-button-active';
    
  }
}
