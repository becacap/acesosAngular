import { Injectable } from '@angular/core';
import { DataChangedListener } from '../other/dataChangedListener';

@Injectable({
  providedIn: 'root'
})
export class FichajesService {

  fichajesURL:string     = "http://localhost:8080/api/fichajes/";
  empleadosURL:string    = "http://localhost:8080/api/empleados/";

  accesos:any;
  empleados:any;

  dataChangedListeners:DataChangedListener[];
  prueba_text:string;

  constructor() { 
    this.prueba_text = "The Good Pruebita";
    this.dataChangedListeners = [];

    this.loadEmpleados ();
  }

  public addDataChangedListener (dataChangedListener:DataChangedListener) : void {
      this.dataChangedListeners.push (dataChangedListener);
  }

  public notifyParamsChanged (year:number, mes:number, empleado:string) : void {
    this.dataChangedListeners.forEach (element => {
      element.onFilterRefreshParameters (year, mes, empleado);
    });
  }

  public retrieveYears (num_years:number) : number[] {
    let years:number[] = [];
    let current_year:number = new Date().getFullYear () - 2;

    for (let i:number = 0; i <= num_years; i++)
      years.push (current_year + i);

    return years;
  }

  public retrieveMonths () : string[] {
    return ['Enero'   , 'Febrero'  , 'Marzo',
            'Abril'   , 'Mayo'     , 'Junio',
            'Julio'   , 'Agosto'   , 'Septiembre',
            'Octubre' , 'Noviembre', 'Diciembre'];
  }

  public retrieveEmpleado () : string[] {
    return ['Paquito Gonzalez', 'Jose Ramon Castaño', 'Alfonsito Ramirez', 'Sonia Nuñez'];
  }

  public loadAccesos (year:number, mes:number, empleado:string) {
    console.log ("Fetch to the DB to retrieve accesos");

    console.log ("year: " + year);
    console.log ("mes. " + mes);
    console.log ("empleado: " + empleado);

    this.getData (
      this.fichajesURL + year + "/" + mes,
      "POST",
      JSON.stringify(empleado)
    ).then ( data => { this.accesos = data; console.log (this.accesos); } );

  }

  public loadEmpleados () {
    console.log ("Fetch to the DB to retrieve accesos");

    this.getData (this.empleadosURL, "GET")
      .then ( data => { this.empleados = data; console.log (this.empleados); } );
  }

  private getData (url:string, method:string, bodyData:string = null) {
    return new Promise(function (resolve, reject) {
      var headers = new Headers();
      headers.append("Content-Type", "application/json");

      fetch (url, { "headers": headers, "method":method, "body": bodyData })
        .then (response => response.json())
        .then (data => resolve(data) );

    })
  }
}
