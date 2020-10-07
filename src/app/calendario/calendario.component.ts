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
  servicio: AccesosServiceService
  aniosPosibles: Set<number>
  arrayDias: Array<Dia>

  constructor(accesosService: AccesosServiceService) {
    this.servicio = accesosService;
  }

  ngOnInit(): void {
    let urlObtenerAniosPosibles = "http://localhost:8080/api/calendario/anyos"
    this.servicio.obtenerDatos(urlObtenerAniosPosibles).then((datos: string) => {
      this.aniosPosibles = new Set(JSON.parse(JSON.stringify(datos)))

      let today = new Date();
      let year = today.getFullYear();

      for (let i: number = year; i <= year + 5; ++i) {
        this.aniosPosibles.add(i);
      }

    })
  }

  obtenerDatosAnio(anioElegido: number) {
    let urlObtenerDatosCalendario: string = "http://localhost:8080/api/calendario/" + anioElegido + "/datos";
    this.servicio.obtenerDatos(urlObtenerDatosCalendario).then((datos: string) => {
      this.anio = JSON.parse(JSON.stringify(datos));
    })
  }

  elegirAnio(anioElegido: number) {
    let urlObtenerAniosPosibles = "http://localhost:8080/api/calendario/anyos"
    this.servicio.obtenerDatos(urlObtenerAniosPosibles).then((datos: string) => {
      let arrayDatos: Array<number> = JSON.parse(JSON.stringify(datos));
      // console.log(arrayDatos)
      // console.log(`Año elegido: ${anioElegido}`)
      let pos = arrayDatos.some(x => x == anioElegido);
      // console.log(pos)
      if (!pos) { // el año no esta en la bd
        // hay que generar un nuevo calendario
      }
      else {
        this.obtenerDatosAnio(anioElegido);
      }
    })
  }

}
