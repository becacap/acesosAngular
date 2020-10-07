import { newArray } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';
import { Dia, Estado, Mes } from '../clases/app.persona';

@Component({
  selector: 'app-mes',
  templateUrl: './mes.component.html',
  styleUrls: ['./mes.component.css']
})
export class MesComponent implements OnInit {

  semanasMes:number
  diasSemana:Array<string>

  @Input("mes") mes:Mes
  matrizMes:Array<Array<Dia>>

  //dia:Dia

  constructor() {
    this.semanasMes = 5;
    this.diasSemana = ['Lunes', 'Martes','Miercoles']
    this.matrizMes = new Array;
   }

  ngOnInit(): void {
    this.separarCalendarioDiasSemana()
  }

  separarCalendarioDiasSemana(){
    let semana:Array<Dia>
    let semanaMesRef = this.mes.datosDia[0].semanaMes;
    semana = new Array;
    let relleno = 0;

    //Relleno antes del primer dia con dias = 0
      //Determinamos los dias a rellenar
    if(this.mes.datosDia[0].diaSemana==0){
      relleno = this.diasSemana.length -1;
    }else if(this.mes.datosDia[0].diaSemana > 1){
      relleno = this.mes.datosDia[0].diaSemana-1;
    }
      //Rellenamos los dias vacios
    for(let i=0; i<relleno; i++){
      semana.push(new Dia(0,null,null,null));
    }

    //Relleno con el resto con los datos
    this.mes.datosDia.forEach(dia=>{
      if(dia.semanaMes == semanaMesRef){
        semana.push(dia);
      }else{
        this.matrizMes.push(semana);
        semanaMesRef = dia.semanaMes;
        semana = []
        semana.push(dia);
      }
    })
    this.matrizMes.push(semana);
    console.log(this.matrizMes)
  }
}
