import { Injectable } from '@angular/core';
import { Empleado } from './clases/app.persona';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  texto: string; 
  constructor() { }

  obtenerEmpleados(url: string): Promise<string> {

    return new Promise(function (resolve, reject) {
      var headers = new Headers();
      headers.append("Content-Type", "application/json");

      fetch(url, { "headers": headers, "method": "GET" }).then(response => response.json())
        .then(data => { return resolve(data) });

    })
  }


/*
  grabarEmpleado(url: string, dato): Promise<string> {

    return new Promise(function (resolve, reject) {
      var headers = new Headers();
      headers.append("Content-Type", "application/json");

      fetch(url, { "headers": headers, "method": "POST", "body": JSON.stringify(dato) }).then(response => response.json())
        .then(data => { return resolve(data) });
    })
  }
  

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
