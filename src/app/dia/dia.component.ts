import { Component, Input, OnInit } from '@angular/core';
import { AccesosServiceService } from '../accesos-service.service';
import { Dia, Estado } from '../clases/app.persona';

@Component({
  selector: 'app-dia',
  templateUrl: './dia.component.html',
  styleUrls: ['./dia.component.css']
})
export class DiaComponent implements OnInit {

  dia: number;
  servicio: AccesosServiceService;
  urlEstados: string = "http://localhost:8080/api/estados/estados-calendario/"
  estadosPosibles: Array<Estado>


  constructor(accesosService: AccesosServiceService) {
    this.dia = 7
    this.servicio = accesosService;
    this.servicio.obtenerDatos(this.urlEstados).then((datos: string) => {
      console.log(datos)
      console.log(JSON.parse(JSON.stringify(datos)))
      this.estadosPosibles = JSON.parse(JSON.stringify(datos))

    })
  }

  ngOnInit(): void {
  }

}
