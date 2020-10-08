import { Injectable } from '@angular/core';
import { JornadaFormComponent } from './jornada-form/jornada-form.component';
import { JornadaTableComponent } from './jornada-table/jornada-table.component';

@Injectable({
  providedIn: 'root'
})
export class JornadaServiceService {

tabla:JornadaTableComponent
form:JornadaFormComponent

  constructor() { }

  obtenerDatos(url: string): Promise<string> {

    return new Promise(function (resolve, reject) {
      var headers = new Headers();
      headers.append("Content-Type", "application/json");

      fetch(url, { "headers": headers, "method": "GET" }).then(response => response.json())
        .then(data => { return resolve(data) });

    })


  }
  grabarDatos(url: string, dato) {
    

    return new Promise(function (resolve, reject) {
      var headers = new Headers();
      headers.append("Content-Type", "application/json");
      fetch(url,
        {
          "headers": headers,
          "method": "POST",
          "body": JSON.stringify(dato)
        }).then(response => response.json())
        .then(data => { return resolve(data) });
    })
  }

getTabla()
{
  return this.tabla
}
setTabla(tabla:JornadaTableComponent)
{
  this.tabla = tabla;
}
getForm()
{
  return this.form
}
setForm(form:JornadaFormComponent)
{
  this.form = form;
}

}
