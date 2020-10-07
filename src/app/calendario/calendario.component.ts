import { Component, OnInit } from '@angular/core';
import { AccesosServiceService } from '../accesos-service.service';
import { Calendario, Dia, Estado, Mes } from '../clases/app.persona';
import { AnyoDto } from '../clases/app.anyoDto';

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
    }).then(function () {
      document.getElementById("mi-spinner-container").style.display = "none";
      document.getElementById("mi-calendario-container").style.display = "flex";
    })
  }

  generarCalendario(anio: number) {
    let urlGenerarCalendario = "http://localhost:8080/api/calendario/generar"
    let anyoDto: AnyoDto = new AnyoDto(anio);

    this.servicio.grabarDatos(urlGenerarCalendario, anyoDto).then((x: Calendario) => {
      if (x.id == 0) {
        alert("El anyo no se ha podido generar")
      } else {
        this.obtenerDatosAnio(anio);
      }
    })
  }

  elegirAnio(anioElegido: number) {
    let urlObtenerAniosPosibles = "http://localhost:8080/api/calendario/anyos"
    this.servicio.obtenerDatos(urlObtenerAniosPosibles).then((datos: string) => {
      let arrayDatos: Array<number> = JSON.parse(JSON.stringify(datos));
      let pos = arrayDatos.some(x => x == anioElegido);

      document.getElementById("mi-calendario-container").style.display = "none";
      document.getElementById("mi-spinner-container").style.display = "flex";

      if (!pos) { // el año no esta en la bd
        // hay que generar un nuevo calendario
        this.generarCalendario(anioElegido);
      }
      else {
        this.obtenerDatosAnio(anioElegido);
      }
    })
  }

}