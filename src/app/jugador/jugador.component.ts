import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.scss']
})
export class JugadorComponent implements OnInit {
  @Input('nombre')
  jugador:string = 'Sergio'
  @Input('equipo')
  equipo:string ='Real Madrid'
  constructor() { }

  ngOnInit() {
  }

}
