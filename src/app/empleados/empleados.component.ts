import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  
  saludo: string;
  servicio: EmpleadoService;
  urlEmpleado: string = "http://localhost:8080/api/empleados"
  urlEmpleadoAnadir: string = "http://localhost:8080/api/add-jornada" //No es esta URL revisar
  empleado: string;

  constructor(empleadoService: EmpleadoService) { 
    this.saludo = empleadoService.texto;
    this.servicio = empleadoService;
  }

  ngOnInit(): void {
  }

  cargarEmpleado() {
    this.servicio.obtenerEmpleados(this.urlEmpleado).then((datos: string) => {
      console.log(datos)
      this.empleado = datos;
    })
  }

}
