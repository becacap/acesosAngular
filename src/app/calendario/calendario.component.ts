import { Component, OnInit } from '@angular/core';
import { Dia, Estado, Mes } from '../clases/app.persona';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  mes:Mes
  URLservicio:string = "/api/calendario/año/datos";
  
  arrayDias:Array<Dia>
  constructor() {
    this.arrayDias = new Array;
    this.arrayDias.push(new Dia(7,0,4,new Estado(5,"LABORABLE",1)));
    this.arrayDias.push(new Dia(8,1,5,new Estado(6,"FESTIVO",1)))
    this.arrayDias.push(new Dia(9,2,5,new Estado(5,"LABORABLE",1)));
    this.arrayDias.push(new Dia(10,0,5,new Estado(6,"FESTIVO",1)))
    this.arrayDias.push(new Dia(11,1,6,new Estado(5,"LABORABLE",1)));
    this.arrayDias.push(new Dia(12,2,6,new Estado(6,"FESTIVO",1)))

    this.mes = new Mes(0,"Enero",this.arrayDias);
   }

  ngOnInit(): void {
  }

}
