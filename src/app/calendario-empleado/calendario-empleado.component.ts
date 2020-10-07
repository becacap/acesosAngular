import { Component, OnInit } from '@angular/core';
import { AccesosServiceService } from '../accesos-service.service'

@Component({
  selector: 'app-calendario-empleado',
  templateUrl: './calendario-empleado.component.html',
  styleUrls: ['./calendario-empleado.component.css']
})
export class CalendarioEmpleadoComponent implements OnInit {
  calendarios: string
  urlCalendarioByYearAndId :string
  servicio: AccesosServiceService

  urlEmpleados:string ="http://localhost:8080/api/empleados/"
  empleados:string
  anyos=[]
  empleadoSeleccionado:number = 0
  anyoSeleccionado:number = 0
  constructor(accesosService: AccesosServiceService) {
    this.servicio = accesosService;
   }

  ngOnInit(): void {
    this.cargarDatos();
  }
  cargarDatos(){
    this.servicio.obtenerDatos(this.urlEmpleados).then((datos:string)=>{
        console.log(datos);
        this.empleados=datos;
    });

    this.anyos=[2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030]
}
cargarCalendario() {
  var id_empleado = this.empleadoSeleccionado;
  var year = this.anyoSeleccionado;
  this.urlCalendarioByYearAndId= "http://localhost:8080/api/usuarios-estados/calendario/"+id_empleado+"/"+year;
  this.servicio.obtenerDatos(this.urlCalendarioByYearAndId).then((datos: string) => {
    console.log(datos);
    this.calendarios = datos;
  });
  //this.ngOnInit();
  //this.generarCalendario(year);
}
}
