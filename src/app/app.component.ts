import { Component } from '@angular/core';
import { stringify } from 'querystring';
import { Persona, Estado, Jornada, UsuariosEstados, Empleado } from './clases/app.persona'
import { EmpleadoService } from './empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor() {
    
  }

  

  /*
  anadirEmpleado() {

    var sEmpleado = document.createElement("select");
    sEmpleado.id = "sEmpleado"

    if (document.querySelector("#sEmpleado") != null)
      document.querySelector("#sEmpleado").remove


    document.querySelector("#capaSelect").appendChild(sEmpleado)


    this.servicio.grabarEmpleado(this.urlEmpleadoAnadir, this.empleado).then((jornada: string) => {
      console.log(this.empleado);
    })
  }

*/
}

