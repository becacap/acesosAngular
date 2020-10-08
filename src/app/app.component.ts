import { Component } from '@angular/core';
import {Persona,Estado, UsuariosEstados, Dia} from './clases/app.persona'
import {AccesosServiceService} from './accesos-service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    saludo:string;
    servicio:AccesosServiceService;
    urlEstados:string="http://localhost:8080/verEstados"
    estados:string
  
    title: string;

  constructor(accesosService:AccesosServiceService){
    this.saludo=accesosService.texto;
    this.servicio=accesosService;
  }

  cargarEstados(){
      this.servicio.obtenerDatos(this.urlEstados).then((datos:string)=>{
          console.log(datos)
          this.estados=datos;
          
      })
  }


}

