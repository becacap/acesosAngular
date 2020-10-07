import { Component, OnInit } from '@angular/core';
import { AccesosServiceService } from '../accesos-service.service';
import { Dia, Estado, Mes } from '../clases/app.persona';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  anio: Array<Mes>
  servicio:AccesosServiceService
  anioElegido:number = 2020;

  //mes:Mes
  

  arrayDias:Array<Dia>
  constructor(accesosService:AccesosServiceService) {

    this.servicio = accesosService;
/*
    this.arrayDias = new Array;
    this.arrayDias.push(new Dia(7,0,4,new Estado(5,"LABORABLE",1)));
    this.arrayDias.push(new Dia(8,1,5,new Estado(6,"FESTIVO",1)))
    this.arrayDias.push(new Dia(9,2,5,new Estado(5,"LABORABLE",1)));
    this.arrayDias.push(new Dia(10,0,5,new Estado(6,"FESTIVO",1)))
    this.arrayDias.push(new Dia(11,1,6,new Estado(5,"LABORABLE",1)));
    this.arrayDias.push(new Dia(12,2,6,new Estado(6,"FESTIVO",1)))

    this.mes = new Mes(0,"Enero",this.arrayDias);*/
   }

  ngOnInit(): void {
    this.obtenerDatosAnio(this.anioElegido);
  }

  obtenerDatosAnio(anioElegido:number){
    let URLservicio:string = "http://localhost:8080/api/calendario/"+anioElegido+"/datos";
    this.servicio.obtenerDatos(URLservicio).then((datos:string)=>{
      this.anio = JSON.parse(JSON.stringify(datos));
      console.log(this.anio)
    })
  }

}
