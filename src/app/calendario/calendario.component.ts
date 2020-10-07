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
  aniosPosibles: Array<number>

  arrayDias:Array<Dia>
  constructor(accesosService:AccesosServiceService) {

    this.servicio = accesosService;
   }

  ngOnInit(): void {
    let urlObtenerAniosPosibles = "http://localhost:8080/api/calendario/anyos"
    this.servicio.obtenerDatos(urlObtenerAniosPosibles).then((datos:string)=>{
      this.aniosPosibles = JSON.parse(JSON.stringify(datos))
    })
  }

  obtenerDatosAnio(anioElegido:number){
    let urlObtenerDatosCalendario:string = "http://localhost:8080/api/calendario/"+anioElegido+"/datos";
    this.servicio.obtenerDatos(urlObtenerDatosCalendario).then((datos:string)=>{
      this.anio = JSON.parse(JSON.stringify(datos));
      console.log(this.anio)
    })
  }

  elegirAnio(anioElegido:number){
    this.obtenerDatosAnio(anioElegido);
  }

}
