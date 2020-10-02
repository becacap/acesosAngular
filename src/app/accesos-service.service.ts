import { Injectable } from '@angular/core';
import { Estado } from './clases/app.persona';

@Injectable({
  providedIn: 'root'
})
export class AccesosServiceService {

  texto:string="Hola como estas"
  constructor() { }

   obtenerDatos(url:string) :Promise<string> {

    return new Promise(function (resolve, reject) {
        var headers = new Headers();
        headers.append("Content-Type", "application/json");

        fetch(url, { "headers": headers,"method":"GET" }).then(response => response.json())
            .then(data => { return resolve(data) });

    })
}


}
