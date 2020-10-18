import { Injectable } from '@angular/core';
import { EmpleadoFormularioComponent } from './empleado-formulario/empleado-formulario.component';
import { EmpleadosComponent } from './empleados/empleados.component';

@Injectable({
  providedIn: 'root'
})
export class ComunicarEmpleadosService {

  empleado:EmpleadosComponent;
  empleado_formulario:EmpleadoFormularioComponent;

  constructor() { }

  setEmpleado(empleado:EmpleadosComponent){
    this.empleado=empleado;
  }

  getEmpleado(){
    return this.empleado;
  }

  setEmpleadoFormulario( empleado_formulario:EmpleadoFormularioComponent){
    this.empleado_formulario=empleado_formulario;
  }

  getEmpleadoFormulario(){
    return this.empleado_formulario;
  }


}
