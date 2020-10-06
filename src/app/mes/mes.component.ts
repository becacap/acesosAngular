import { newArray } from '@angular/compiler/src/util';
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
  matrizMes:Array<Array<Dia>>

  //dia:Dia

  constructor() {
    this.semanasMes = 5;
    this.diasSemana = ['Lunes', 'Martes','Miercoles']
    //this.dia = new Dia(7,2,4,new Estado(5,"LABORABLE",1));
    this.diasLunes = new Array;
    this.diasMartes = new Array;
    this.diasMiercoles = new Array;

    this.matrizMes = new Array;

    this.datosDia = new Array;
    this.datosDia.push(new Dia(7,0,4,new Estado(5,"LABORABLE",1)));
    this.datosDia.push(new Dia(8,1,5,new Estado(6,"FESTIVO",1)))
    this.datosDia.push(new Dia(9,2,5,new Estado(5,"LABORABLE",1)));
    this.datosDia.push(new Dia(10,0,5,new Estado(6,"FESTIVO",1)))
    this.datosDia.push(new Dia(11,1,6,new Estado(5,"LABORABLE",1)));
    this.datosDia.push(new Dia(12,2,6,new Estado(6,"FESTIVO",1)))
   }

  ngOnInit(): void {
    this.separarCalendarioDiasSemana()
  }

  separarCalendarioDiasSemana(){
    let semana:Array<Dia>
    let semanaMesRef = this.datosDia[0].semanaMes;
    semana = new Array;
    let relleno = 0;

    //Relleno antes del primer dia con dias = 0
      //Determinamos los dias a rellenar
    if(this.datosDia[0].diaSemana==0){
      relleno = this.diasSemana.length -1;
    }else if(this.datosDia[0].diaSemana > 1){
      relleno = this.datosDia[0].diaSemana-1;
    }
      //Rellenamos los dias vacios
    for(let i=0; i<relleno; i++){
      semana.push(new Dia(0,null,null,null));
    }

    //Relleno con el resto con los datos
    this.datosDia.forEach(dia=>{
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

    /*this.datosDia.forEach(dia=>{
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
    console.log(this.todosDias)*/
  }
}
