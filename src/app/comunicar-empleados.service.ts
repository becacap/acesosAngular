import { Injectable } from '@angular/core';
import { EmpleadoFormularioComponent } from './empleado-formulario/empleado-formulario.component';
import { EmpleadosComponent } from './empleados/empleados.component';

@Injectable({
  providedIn: 'root'
})
export class ComunicarEmpleadosService {

  empleado: EmpleadosComponent
  empleado_formulario: EmpleadoFormularioComponent

  constructor() { }

  getEmpleado(){
    return this.empleado;
  }

  setEmpleado(empleado: EmpleadosComponent){
    this.empleado = empleado
  }

  getEmpleadoFormulario(){
    return this.empleado_formulario
  }

  setEmpleadoFormulario(empleado_formulario: EmpleadoFormularioComponent){
    this.empleado_formulario = empleado_formulario
  }
}
