import { newArray } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';
import { Dia, Estado, Mes } from '../clases/app.persona';

@Component({
  selector: 'app-mes',
  templateUrl: './mes.component.html',
  styleUrls: ['./mes.component.css']
})
export class MesComponent implements OnInit {

  diasSemana:Array<string>

  @Input("mes") mes:Mes
  matrizMes:Array<Array<Dia>>

  //dia:Dia

  constructor() {
    this.diasSemana = ['Lunes', 'Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']
    this.matrizMes = new Array;
   }

  ngOnInit(): void {
    this.separarCalendarioDiasSemana()
  }

  separarCalendarioDiasSemana(){
    let semana:Array<Dia>
    let semanaMesRef:number = this.mes.datosDias[0].semanaMes;
    console.log(semanaMesRef)
    semana = new Array;
    let relleno = 0;

    //Relleno antes del primer dia con dias nulos
      //Determinamos los dias a rellenar sabiendo a que dia de semana cae el primero de mes (Domingo=1,lunes=2...)
    if(this.mes.datosDias[0].diaSemana==1){
      relleno = this.diasSemana.length -1;
    }else if(this.mes.datosDias[0].diaSemana > 2){
      relleno = this.mes.datosDias[0].diaSemana-2;
    }
      //Rellenamos los dias vacios
    for(let i=0; i<relleno; i++){
      semana.push(new Dia(0,null,null,null));
    }

    //Relleno con el resto con los datos
    this.mes.datosDias.forEach(dia=>{
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
  }
}
