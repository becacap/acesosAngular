import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Empleado } from '../clases/app.persona';
import { ComunicarEmpleadosService } from '../comunicar-empleados.service';
import { EmpleadoFormularioComponent } from '../empleado-formulario/empleado-formulario.component';
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
  comunicar_empleados_servicio: ComunicarEmpleadosService
  empleadoService:EmpleadoService


  constructor(empleadoService: EmpleadoService, comunicar_empleados_servicio: ComunicarEmpleadosService) { 
    this.saludo = empleadoService.texto;
    this.servicio = empleadoService;
    this.comunicar_empleados_servicio = comunicar_empleados_servicio
    this.empleadoService = empleadoService
  }

  ngOnInit(): void {
    this.comunicar_empleados_servicio.setEmpleado(this)
    this.cargarEmpleado()
  }

  cargarEmpleado() {
    this.servicio.obtenerDatos(this.urlEmpleado).then((datos: string) => {
      console.log(datos)
      this.empleado = datos;
    })
  }

  modificar(empleado){
    this.comunicar_empleados_servicio.getEmpleadoFormulario().rellenarTabla(empleado)
  }
}
