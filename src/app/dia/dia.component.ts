import { Component, DebugElement, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { AccesosServiceService } from '../accesos-service.service';
import { Dia, Estado } from '../clases/app.persona';

@Component({
  selector: 'app-dia',
  templateUrl: './dia.component.html',
  styleUrls: ['./dia.component.css']
})
export class DiaComponent implements OnInit {

  @Input("dia") dia: Dia;
  servicio: AccesosServiceService;
  urlEstados: string = "http://localhost:8080/api/estados/estados-calendario/"
  estadosPosibles: Array<Estado>
  seleccion:number


  constructor(accesosService: AccesosServiceService) {
    this.servicio = accesosService;
    this.servicio.obtenerDatos(this.urlEstados).then((datos: string) => {
      //console.log(datos)
      this.estadosPosibles = JSON.parse(JSON.stringify(datos))
      console.log(this.dia.estado)
      this.seleccion = this.dia.estado;

    })
  }

  ngOnInit(): void {
  }

  cambiarOpcion(cambio:number){
    //console.log("He cambiado a " + cambio)
    
  }

}
