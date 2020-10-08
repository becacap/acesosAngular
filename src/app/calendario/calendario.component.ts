import { Component, OnInit } from '@angular/core';
import { AccesosServiceService } from '../accesos-service.service';
import { CalendarioEmpleadoService } from '../calendario-empleado.service';
import { Dia, Empleado, Estado, Jornada, Mes, UsuariosEstados } from '../clases/app.persona';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {


  anio: Array<Mes>
  servicio: CalendarioEmpleadoService
  aniosPosibles: Set<number>
  arrayDias: Array<Dia>

  estadosPosibles: Array<Estado>
  jornadasPosibles: Array<Jornada>
  empleadosPosibles:Array<Empleado>
  usuarioEstado: string

  // Select
  anyoSeleccionado:number

  constructor(accesosService: AccesosServiceService) {
    this.servicio = accesosService;
  }

  ngOnInit(): void {

    let urlObtenerAniosPosibles = "http://localhost:8080/api/calendario/anyos"

    const urlEmpleadosTotal = "http://localhost:8080/api/empleados/"
    const urlEstadosTotal = "http://localhost:8080/api/estados/"
    const urlJornadasTotal = "http://localhost:8080/api/jornadas/"

    this.servicio.obtenerDatos(urlObtenerAniosPosibles).then((datos: string) => {
      this.aniosPosibles = new Set(JSON.parse(JSON.stringify(datos)))

      let today = new Date();
      let year = today.getFullYear();

      for (let i: number = year; i <= year + 5; ++i) {
        this.aniosPosibles.add(i);
      }

    })

    // Get Estados posibles
    this.servicio.obtenerDatos(urlEstadosTotal).then((datos:string) =>{
      this.estadosPosibles = JSON.parse(JSON.stringify(datos))
    })

    // Get Jornadas posibles
    this.servicio.obtenerDatos(urlJornadasTotal).then((datos:string) =>{
      this.jornadasPosibles = JSON.parse(JSON.stringify(datos))
    })

    // Get Empleados posibles
    this.servicio.obtenerDatos(urlEmpleadosTotal).then((datos:string) =>{
      this.empleadosPosibles = JSON.parse(JSON.stringify(datos))
      /*this.empleadosPosibles.forEach(empleado => {
        console.log("Empleados: " + empleado.nombre);
      });*/
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
      let pos = arrayDatos.some(x => x == anioElegido);
      // console.log(pos)
      if (!pos) { // el año no esta en la bd
        // hay que generar un nuevo calendario
      }
      else {
        //this.obtenerDatosAnio(anioElegido);
        // Enable Empleado form
        
      }
    })
  
  }

  elegirEmpleado(empleado:Empleado){

    //console.log(empleado)
    //
    let year = this.anyoSeleccionado;
    // Get UsuarioEstado Calendar (if it doesnt exist, create it)
    let urlUsuarioEstadoByIDAndYear: string = "http://localhost:8080/api/usuarios-estados/calendario/" + 4 + "/" + year;
    console.log(urlUsuarioEstadoByIDAndYear);
    // Load Calendario
    this.obtenerDatosAnio(year);

    // Load UsuarioEstado
    this.servicio.obtenerDatos(urlUsuarioEstadoByIDAndYear).then((datos: string) => {
      this.usuarioEstado = datos;
      /*this.usuarioEstado.forEach(ue => {
        console.log("Empleados: " + ue.calendario.fecha);
      });*/
    })

  }


}
