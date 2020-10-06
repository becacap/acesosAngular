import { Component, OnInit } from '@angular/core';
import { Dia, Estado } from '../clases/app.persona';

@Component({
  selector: 'app-mes',
  templateUrl: './mes.component.html',
  styleUrls: ['./mes.component.css']
})
export class MesComponent implements OnInit {

  semanasMes:number
  diasSemana:Array<string>
  diasLunes:Array<Dia>
  diasMartes:Array<Dia>
  diasMiercoles:Array<Dia>

  datosDia:Array<Dia>
  todosDias:Array<Array<Dia>>

  //dia:Dia

  constructor() {
    this.semanasMes = 5;
    this.diasSemana = ['Lunes', 'Martes','Miercoles']
    //this.dia = new Dia(7,2,4,new Estado(5,"LABORABLE",1));
    this.diasLunes = new Array;
    this.diasMartes = new Array;
    this.diasMiercoles = new Array;

    this.todosDias = new Array;

    this.datosDia = new Array;
    this.datosDia.push(new Dia(7,1,4,new Estado(5,"LABORABLE",1)));
    this.datosDia.push(new Dia(8,2,4,new Estado(6,"FESTIVO",1)))
    this.datosDia.push(new Dia(9,3,4,new Estado(5,"LABORABLE",1)));
    this.datosDia.push(new Dia(10,1,4,new Estado(6,"FESTIVO",1)))
    this.datosDia.push(new Dia(11,2,4,new Estado(5,"LABORABLE",1)));
    this.datosDia.push(new Dia(12,3,4,new Estado(6,"FESTIVO",1)))
   }

  ngOnInit(): void {
    this.separarCalendarioDiasSemana()
  }

  separarCalendarioDiasSemana(){
    this.datosDia.forEach(dia=>{
      switch(dia.diaSemana){
        case 1:
          this.diasLunes.push(dia);
          break;
        case 2:
          this.diasMartes.push(dia);
          break;
        case 3:
          this.diasMiercoles.push(dia);
          break;
      }
    })
    console.log(this.diasLunes)
    console.log(this.diasMiercoles)
    this.todosDias.push(this.diasLunes);
    this.todosDias.push(this.diasMartes);
    this.todosDias.push(this.diasMiercoles);
    console.log(this.todosDias)
  }
}
