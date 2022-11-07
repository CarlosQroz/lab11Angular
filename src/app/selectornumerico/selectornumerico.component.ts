import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectornumerico',
  templateUrl: './selectornumerico.component.html',
  styleUrls: ['./selectornumerico.component.css']
})
export class SelectornumericoComponent implements OnInit {
  minimo = 0;
  maximo = 99;
  actual = 1;
  constructor() { }

  ngOnInit() {
    this.actual = this.minimo;
  }
  incrementar() {
    if (this.actual<this.maximo)
      this.actual++;
  }
  decrementar(){
    if (this.actual>this.minimo)
    this.actual--;
  }
  fijar(v:number) {
    if (v>=this.minimo && v<=this.maximo)
    this.actual=v;
  }
}
