import { Component, DebugElement, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { AccesosServiceService } from '../accesos-service.service';
import { Calendario, Dia, Estado } from '../clases/app.persona';

@Component({
  selector: 'app-dia',
  templateUrl: './dia.component.html',
  styleUrls: ['./dia.component.css']
})
export class DiaComponent implements OnInit {

  urlBaseEstados: string = "http://localhost:8080/api/estados"
  urlBaseCalendarios: string = "http://localhost:8080/api/calendario"

  @Input("dia") dia: Dia;
  servicio: AccesosServiceService;
  estadosPosibles: Array<Estado>
  seleccion: number


  constructor(accesosService: AccesosServiceService) {
    this.servicio = accesosService;
  }

  ngOnInit(): void {
    this.servicio.obtenerDatos(`${this.urlBaseEstados}/estados-calendario`).then((datos: string) => {
      this.estadosPosibles = JSON.parse(JSON.stringify(datos))
      //this.pintaDia(this.dia.estado);
      this.seleccion = this.dia.estado.id;
    })
  }

  cambiarOpcion(cambio: number) {
    let urlModificaEstadoEnCalendario = `${this.urlBaseCalendarios}/actualizar/${this.dia.idCalendario}`
    let estadoNuevo = new Estado(cambio, null, null, null);
    this.servicio.grabarDatos(urlModificaEstadoEnCalendario, estadoNuevo).then((x: Calendario) => {
      if (x.id == 0) {
        alert("El estado no se ha podido guardar en la base de datos")
      } else {
        this.pintaDia(x.estado.id)
      }
    })
  }

  pintaDia(idEstado: number) {
    let urlEsatdoById = `${this.urlBaseEstados}/${idEstado}`
    this.servicio.obtenerDatos(urlEsatdoById).then((estadoJson: string) => {
      let estado: Estado = JSON.parse(JSON.stringify(estadoJson));
      document.getElementById(`${this.dia.idCalendario}`).style.backgroundColor = estado.color;
    })
  }

}
