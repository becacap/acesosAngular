import { Injectable } from '@angular/core';
import { Empleado } from './clases/app.persona';
import { EmpleadoFormularioComponent } from './empleado-formulario/empleado-formulario.component';
import { EmpleadosComponent } from './empleados/empleados.component';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  texto: string; 
  empleados: EmpleadosComponent;
  empleados_formulario: EmpleadoFormularioComponent;

  constructor() { }

  obtenerDatos(url: string): Promise<string> {

    return new Promise(function (resolve, reject) {
      var headers = new Headers();
      headers.append("Content-Type", "application/json");

      fetch(url, { "headers": headers, "method": "GET" }).then(response => response.json())
        .then(data => { return resolve(data) });

    })
  }



  grabarEmpleado(url: string, dato): Promise<string> {

    return new Promise(function (resolve, reject) {
      var headers = new Headers();
      headers.append("Content-Type", "application/json");

      fetch(url, { "headers": headers, "method": "POST", "body": JSON.stringify(dato) }).then(response => response.json())
        .then(data => { return resolve(data) });
    })
  }
  
getEmpleados(){
  return this.empleados;
}

setEmpleados(empleados:EmpleadosComponent){
  this.empleados= empleados;
}

getEmpleadosFormulario(){
  return this.empleados_formulario;
}

setEmpleadosFormulario(empleados_formulario:EmpleadoFormularioComponent){
  this.empleados_formulario= empleados_formulario;
}
/*
  grabarJornada(url: string, dato): Promise<string> {

    return new Promise(function (resolve, reject) {
      var headers = new Headers();
      headers.append("Content-Type", "application/json");

      fetch(url, { "headers": headers, "method": "POST", "body": JSON.stringify(dato) }).then(response => response.json())
        .then(data => { return resolve(data) });
    })
  }

  botonModificar(idJornada) {
    console.log("Hempos pulsado modificar");
    (<HTMLInputElement>document.getElementById('jornadas')).value = idJornada;
  }

  */

}
